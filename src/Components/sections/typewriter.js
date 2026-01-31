import { useState, useEffect, useRef } from "react";

export default function Typewriter({ text, speed = 40, delay = 0, onComplete }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  // Start typing when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started]);

  // Typing effect
  useEffect(() => {
    if (!started) return;

    let i = 0;

    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));

        if (i === text.length) {
          clearInterval(interval);
          if (onComplete) onComplete();   // <-- SAFE & CORRECT
        }
      }, speed);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [started, text, speed, delay, onComplete]);

  return <span ref={ref}>{displayed}</span>;
}
