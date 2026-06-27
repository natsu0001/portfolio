"use client";

import { motion } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";

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
  const count = useCounter(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="
        group
        border
        border-border
        hover:border-accent/40
        hover:bg-bg-2
        hover:-translate-y-1
        transition-all
        duration-300
        p-6
      "
    >
      <h3 className="text-5xl font-bold leading-none">
        {count}
        <span className="text-accent">{suffix}</span>
      </h3>

      <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-text-3">
        {label}
      </p>
    </motion.div>
  );
}