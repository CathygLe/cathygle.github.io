import React, { useState, useEffect, useMemo } from "react";

interface TypewriterProps {
  texts: string[];
  speed?: number;      // typing speed per char
  backSpeed?: number;  // deleting speed per char
  pause?: number;      // pause after finishing a string (ms)
  initialDelay?: number; // delay before starting the first string (ms)
}

const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  speed = 230,
  backSpeed = 50,
  pause = 200,
  initialDelay = 0,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // reserve space equal to the longest string so deleting doesn't reflow layout
  const maxLen = useMemo(() => {
    if (!texts || texts.length === 0) return 0;
    return Math.max(...texts.map((t) => t.length));
  }, [texts]);

  useEffect(() => {
    if (finished) return;

    let timeout: number;

    const currentText = texts[textIndex];

    if (!deleting) {
      // Typing
      if (charIndex < currentText.length) {
        // apply initialDelay only before the very first character of the first string
        const delay = textIndex === 0 && charIndex === 0 ? initialDelay : speed;
        timeout = window.setTimeout(() => {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, delay);
      } else {
        // Finished typing current string
        if (textIndex + 1 === texts.length) {
          setFinished(true); // stop if last string
        } else {
          // Pause before deleting the first string
          timeout = window.setTimeout(() => setDeleting(true), pause);
        }
      }
    } else {
      // Deleting
      if (charIndex > 0) {
        timeout = window.setTimeout(() => {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, backSpeed);
      } else {
        setDeleting(false);
        setTextIndex(textIndex + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, finished, texts, speed, backSpeed, pause]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = window.setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span
      className="auto-type"
      style={{ minWidth: `${maxLen}ch`, display: "inline-block", whiteSpace: "nowrap" }}
    >
      {displayedText}
      <span className="cursor">{showCursor ? "|" : " "}</span>
    </span>
  );
};

export default Typewriter;
