"use client";
import { useLayoutEffect } from "react";

/**
 * Sets html[data-loaded="true"] right after first paint.
 * Do NOT remove the attribute on unmount; we want it to persist.
 */
export default function OnMountFlag() {
  useLayoutEffect(() => {
    const el = document.documentElement;
    // ensure starting state has no attribute so elements are at opacity:0
    el.removeAttribute("data-loaded");
    const id = requestAnimationFrame(() => {
      el.setAttribute("data-loaded", "true");
    });
    return () => cancelAnimationFrame(id); // do NOT remove the attribute here
  }, []);
  return null;
}
