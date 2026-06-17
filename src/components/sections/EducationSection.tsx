import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import EducationCard from "./EducationCard";
import { education } from "@/data/education";

const EducationSection = () => {
  return (
    <SectionWrapper id="education">
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
              Education
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
            Learning & Growth
          </h2>
        </div>

        <div
          className="
            grid
            md:grid-cols-2
            gap-6
          "
        >
          {education.map((item) => (
            <EducationCard
              key={item.id}
              degree={item.degree}
              institution={item.institution}
              duration={item.duration}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default EducationSection;