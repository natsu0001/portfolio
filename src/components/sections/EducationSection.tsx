import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import EducationCard from "./EducationCard";
import { education } from "@/data/education";
import SectionHeading from "../common/SectionHeading";
const EducationSection = () => {
  return (
    <SectionWrapper id="education">
      <Container>
        {/* Header */}
 <SectionHeading
  label="Education"
  title="Learning & Growth"
/>

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