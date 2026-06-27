"use client";

import { useEffect, useState } from "react";

export function useCounter(end: number, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}