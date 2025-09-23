"use client";
import { useEffect } from "react";

export default function OnMountFlag() {
  useEffect(() => {
    const el = document.documentElement;
    el.setAttribute("data-loaded", "true");
    return () => el.removeAttribute("data-loaded");
  }, []);
  return null;
}
