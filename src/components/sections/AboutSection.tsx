"use client";

import aboutImage from "@/assets/about.png";
import { aboutData } from "@/data/about";
import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import { motion } from "framer-motion";
import StatCard from "./StatCard";


const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <Container>
       <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">

  {/* LEFT SIDE */}

  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    }}
  >
    {/* Label */}

    <div className="flex items-center gap-3 mb-5">
      <span className="w-10 h-px bg-accent" />
      <p className="text-xs uppercase tracking-[0.3em] text-accent">
        About Me
      </p>
    </div>

    {/* Title */}

    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
      {aboutData.title}
    </h2>

    {/* Intro */}

    <p className="text-text-2 leading-8 mb-6">
      {aboutData.intro}
    </p>

    {/* Story */}

    <p className="text-text-2 leading-8">
      {aboutData.story}
    </p>

    {/* Quote */}

    <div className="border-l-2 border-accent pl-5 mt-8">
      <p className="italic text-text-3">
        "Building products people enjoy using while capturing stories worth
        remembering."
      </p>
    </div>

    {/* Signature */}

    <div className="mt-10">
      <h3 className="font-display text-4xl tracking-widest text-accent">
        {aboutData.signature}
      </h3>

      <p className="text-sm text-text-3 mt-2">
        {aboutData.role} • {aboutData.location}
      </p>
    </div>
  </motion.div>

  {/* RIGHT SIDE */}

  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      delay: 0.2,
    }}
    className="max-w-xl mx-auto w-full"
  >
    {/* IMAGE */}

    <div className="relative overflow-hidden rounded-lg bg-bg-2 border
border-border
shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

      {/* Glow */}

      <div className="absolute inset-0 bg-accent/10 blur-3xl" />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-40
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:30px_30px]
        "
      />

      {/* Accent */}

      <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />

      {/* Corner accents */}

      <div className="absolute top-5 left-5 w-10 h-10 border-t border-l border-accent/50 z-20" />

      <div className="absolute bottom-5 right-5 w-10 h-10 border-b border-r border-accent/50 z-20" />

      {/* Image */}

      <img
        src={aboutImage}
        alt="Abhishek"
        className="
          relative
          z-10
          w-full
          object-cover

          [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]
        "
      />

      {/* Bottom fade */}

      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent z-10" />

      {/* Initials */}

      <div className="absolute bottom-10 left-10 text-[7rem] font-display text-accent/10 select-none">
        JB
      </div>
    </div>

    {/* STATS */}

    <div className="grid grid-cols-2 gap-5 mt-8">
  {aboutData.stats.map((stat) => (
    <StatCard
      key={stat.label}
      value={stat.value}
      suffix={stat.suffix}
      label={stat.label}
    />
  ))}
</div>

  </motion.div>

</div>
      </Container>
    </SectionWrapper>
  );
};

export default AboutSection;