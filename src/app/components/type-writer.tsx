"use client";
import { useEffect, useState } from "react";

type Props = { text?: string; design?: string; speed?: number };

export default function Typewriter({
  text = "",
  design = "",
  speed = 40,
}: Props) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  useEffect(() => {
    const id = setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(id);
  }, []);

  return (
    <p className={design} aria-label={text}>
      {displayed}
      <span className="inline-block w-2 text-[#6f4e37]">
        {showCursor ? (
          <span className="animate-blink">|</span>
        ) : (
          <span>&nbsp;</span>
        )}
      </span>
    </p>
  );
}
