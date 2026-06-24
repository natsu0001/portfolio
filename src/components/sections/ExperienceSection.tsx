import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import { experience } from "@/data/experience";
import ExperienceItem from "./ExperienceItem";
import SectionHeading from "../common/SectionHeading";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience">
      <Container>
        {/* Header */}

        <div className=" flex flex-col md:flex-row gap-20 lg:gap-60 ">
          <motion.div
           className="flex-1"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
          >
          <SectionHeading
           label="Experience"
           title="My Journey So Far"
           />
           </motion.div>

           
        {/* Timeline */}
        <motion.div
  className="relative"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
          
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

          {experience.map((item, index) => (
            <ExperienceItem
              key={item.year}
              index={index}
              year={item.year}
              title={item.title}
              description={item.description}
            />
          ))}
        </motion.div>
        </div>
    
      </Container>
    </SectionWrapper>
  );
};

export default ExperienceSection;