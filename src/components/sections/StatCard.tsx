"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

type StatCardProps = {
  value: number;
  suffix?: string;
  label: string;
};

export default function StatCard({
  value,
  suffix = "",
  label,
}: StatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  const isInView = useInView(cardRef, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (!isInView || !numberRef.current) return;

    let current = 0;

    const duration = 1200;

    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= value) {
        current = value;
        clearInterval(timer);
      }

      if (numberRef.current) {
        numberRef.current.textContent = Math.floor(current).toString();
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        border
        border-border
        p-6

        hover:border-accent/40
        hover:bg-bg-2
        hover:-translate-y-1

        transition-all
        duration-300
      "
    >
      <h3 className="text-5xl font-bold leading-none">
        <span ref={numberRef}>0</span>

        <span className="text-accent">
          {suffix}
        </span>
      </h3>

      <p
        className="
          mt-3
          text-[11px]
          uppercase
          tracking-[0.2em]
          text-text-3
        "
      >
        {label}
      </p>
    </motion.div>
  );
}