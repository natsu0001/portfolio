import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import { experience } from "@/data/experience";
import ExperienceItem from "./ExperienceItem";
import SectionHeading from "../common/SectionHeading";

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience">
      <Container>
        {/* Header */}

        <div className=" flex flex-col md:flex-row gap-20 lg:gap-60 ">
          <div className="flex-1">
          <SectionHeading
           label="Experience"
           title="My Journey So Far"
           />
           </div>

           
        {/* Timeline */}
        <div className="relative ">
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
        </div>
    
      </Container>
    </SectionWrapper>
  );
};

export default ExperienceSection;