"use client";

import { useState, useEffect } from "react";

export default function Typewriter() {
  // TYPEWRITER EFFECT STATE AND LOGIC
  const fullText = "On a journey to make the world a better place...";
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let current = 0;
    const typing = setInterval(() => {
      setDisplayed(fullText.slice(0, current + 1));
      current++;
      if (current === fullText.length) clearInterval(typing);
    }, 40);

    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((v) => !v);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);
  return (
    <p className="pb-10 md:pb-60 text-base md:text-lg min-h-[2.5rem] text-[#6f4e37]">
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
