import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import { experience } from "@/data/experience";
import ExperienceItem from "./ExperienceItem";

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience">
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
              Experience
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
            My Journey So Far
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="
              absolute
              left-[5px]
              top-0
              bottom-0
              w-px
              bg-border
            "
          />

          {experience.map((item) => (
            <ExperienceItem
              key={item.year}
              year={item.year}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default ExperienceSection;