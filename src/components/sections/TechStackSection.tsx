import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import TechCard from "./TechCard";
import { techStack } from "@/data/tech";

const TechSection = () => {
  return (
    <SectionWrapper id="tech">
      <Container>
        {/* Header */}

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-accent" />

            <p
              className="
                text-xs
                font-semibold
                tracking-[0.25em]
                uppercase
                text-accent
              "
            >
              Tech Stack
            </p>
          </div>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              tracking-tight
            "
          >
            Technologies I Work With
          </h2>
        </div>

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {techStack.map((group) => (
            <TechCard
              key={group.category}
              category={group.category}
              technologies={group.technologies}
            />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default TechSection;