"use client";

import { useEffect, useRef, type RefObject } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function useModalFocus(
  dialogRef: RefObject<HTMLElement | null>,
  onClose: () => void,
  returnFocusRef?: RefObject<HTMLElement | null>
) {
  const closeRef = useRef(onClose);

  useEffect(() => {
    closeRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const openingTrigger = returnFocusRef?.current;
    const previousInert = new Map<HTMLElement, boolean>();

    // Inert each branch outside the dialog, while leaving its clickable
    // backdrop available to dismiss it.
    for (
      let node: HTMLElement | null = dialog;
      node && node !== document.body;
      node = node.parentElement
    ) {
      for (const sibling of node.parentElement?.children ?? []) {
        if (sibling === node || sibling.hasAttribute("data-dialog-backdrop")) {
          continue;
        }
        if (sibling instanceof HTMLElement) {
          previousInert.set(sibling, sibling.inert);
          sibling.inert = true;
        }
      }
    }

    const focusable = () =>
      Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (element) => element.getClientRects().length > 0 && !element.inert
      );
    const initialFocus = dialog.querySelector<HTMLElement>(
      "[data-dialog-initial-focus]"
    );
    (initialFocus ?? focusable()[0] ?? dialog).focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeRef.current();
      }
      if (event.key !== "Tab") return;

      const items = focusable();
      if (!items.length) {
        event.preventDefault();
        dialog.focus();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (
        event.shiftKey &&
        (document.activeElement === first || document.activeElement === dialog)
      ) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const onFocusIn = (event: FocusEvent) => {
      if (!dialog.contains(event.target as Node)) {
        (initialFocus ?? focusable()[0] ?? dialog).focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocusIn);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocusIn);
      for (const [element, inert] of previousInert) element.inert = inert;
      const returnFocus = openingTrigger ?? previousFocus;
      if (returnFocus?.isConnected) returnFocus.focus();
    };
  }, [dialogRef, returnFocusRef]);
}
