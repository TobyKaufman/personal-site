'use client'


import { useState, useEffect } from "react";
import { text } from "stream/consumers";
import "../globals.css";
import Header from "../header";


export default function About() {
  return (
    <div>
      <Header></Header>
      Currently working on About section
      <Typewriter text="Hello, world!" typingSpeed={1000} deletingSpeed={50} pauseDuration={1000} />
    </div>
  );
}

interface TypewriterProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  typingSpeed,
  deletingSpeed,
  pauseDuration,
}) => {
  const [displayText, setDisplayText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing logic
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else {
          // Switch to deleting after a pause
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting logic
        if (displayText.length > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
        } else {
          // Reset for the next loop
          setIsDeleting(false);
          setCurrentIndex(0);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, text, typingSpeed, deletingSpeed, pauseDuration]);

  return <span>{displayText}</span>;
};