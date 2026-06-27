"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import { techStack } from "@/data/tech";

const TechSection = () => {
  const [activeKey, setActiveKey] = useState(
    techStack[0].key
  );

  const activeCategory =
    techStack.find((c) => c.key === activeKey)!;

  return (
    <SectionWrapper id="tech">
      <Container>
         <motion.div
           initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1],
  }}>
        <SectionHeading
          label="Tech Stack"
          title="Technologies I Work With"
        />
        </motion.div>

        {/* Tabs */}
       <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{
        hidden: {},
        show:{
            transition:{
                staggerChildren:0.08
            }
        }
    }}
    className="flex overflow-x-auto border-b border-border mb-10"
>
          {techStack.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveKey(category.key)}
              className={`
  px-6
  py-4
  text-[11px]
  uppercase
  tracking-[0.18em]
  whitespace-nowrap
  border-b-2
  transition-all
  duration-300

  ${
    activeKey === category.key
      ? "border-accent text-accent"
      : "border-transparent text-text-3 hover:text-text"
  }
`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Tech Grid */}
       <AnimatePresence mode="wait">
  <motion.div
    key={activeKey}
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.35 }}
    className="
      grid
      grid-cols-3
      sm:grid-cols-4
      md:grid-cols-5
      lg:grid-cols-6

      border
      border-border
    "
  >
    {activeCategory.items.map((tech, index) => (
      <motion.div
        key={tech.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.05,
          duration: 0.3,
        }}
        className="
          group

          border-r
          border-b
          border-border

          aspect-square

          flex
          flex-col
          items-center
          justify-center
          gap-4

          transition-all
          duration-300

          hover:bg-bg-2
          
        "
      >
        <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
          {tech.icon}
        </span>

        <span
          className="
            text-[11px]
            uppercase
            tracking-[0.18em]
            text-text-2

            transition-colors

            group-hover:text-accent
          "
        >
          {tech.name}
        </span>
      </motion.div>
    ))}
  </motion.div>
</AnimatePresence>
      </Container>
    </SectionWrapper>
  );
};

export default TechSection;