"use client";

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
        <SectionHeading
          label="Tech Stack"
          title="Technologies I Work With"
        />

        {/* Tabs */}
        <div
          className="
            flex
            overflow-x-auto
            border-b
            border-border
            mb-10

            [&::-webkit-scrollbar]:hidden
          "
        >
          {techStack.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveKey(category.key)}
              className={`
                px-6
                py-4
                text-xs
                uppercase
                tracking-[0.15em]
                border-b-2
                transition-all

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
        </div>

        {/* Tech Grid */}
        <div
          className="
            mt-10

    flex
    gap-4

    overflow-x-auto
    snap-x
    snap-mandatory
    scroll-smooth

    pb-4

    [&::-webkit-scrollbar]:hidden
    [-ms-overflow-style:none]
    [scrollbar-width:none]

    
          "
        >
          {activeCategory.items.map((tech) => (
            <div
              key={tech.name}
              className="
                bg-bg
                hover:bg-bg-2

                transition-all
                duration-300

                p-6

                flex
                flex-col
                items-center
                justify-center
                gap-3
              "
            >
              <span className="text-3xl">
                {tech.icon}
              </span>

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  text-text-2
                "
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default TechSection;