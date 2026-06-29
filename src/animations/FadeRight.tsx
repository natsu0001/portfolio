"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeRightProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function FadeRight({
  children,
  className,
  delay = 0,
}: FadeRightProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}