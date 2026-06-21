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
        <div className="md:flex justify-between">
          <SectionHeading
            label="Education"
            title="Learning & Growth"
          />

        <div
          className="
            grid
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
        </div>
 
      </Container>
    </SectionWrapper>
  );
};

export default EducationSection;