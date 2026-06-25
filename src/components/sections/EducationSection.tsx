import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import EducationCard from "./EducationCard";
import { education } from "@/data/education";
import SectionHeading from "../common/SectionHeading";
const EducationSection = () => {
  return (
    <SectionWrapper id="education"  className="bg-zinc-900" >
      <Container>
        {/* Header */}
        <div className="lg:flex gap-7 justify-between">
          <SectionHeading
            label="Education"
            title="Learning & Growth"
          />

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

    lg:grid
    lg:grid-cols-3

    lg:gap-0
    lg:overflow-visible
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