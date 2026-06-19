import SectionHeading from "../common/SectionHeading";
import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import TechCard from "./TechCard";
import { techStack } from "@/data/tech";

const TechSection = () => {
  return (
    <SectionWrapper id="tech">
      <Container>
        {/* Header */}

<SectionHeading
  label="Tech Stack"
  title="Technologies I Work With"
/>

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