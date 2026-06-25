import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import EducationCard from "./EducationCard";
import { education } from "@/data/education";
import SectionHeading from "../common/SectionHeading";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
const EducationSection = () => {
  return (
    <SectionWrapper id="education"  className="bg-bg-2" >
      <Container>
        {/* Header */}
        <div className="lg:flex gap-7 justify-between">
          <motion.div
           initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1],
  }}>
          
          <SectionHeading
            label="Education"
            title="Learning & Growth"
          />
          </motion.div>
          <div className="mt-10 lg:hidden">
  <Swiper
    modules={[Pagination]}
    pagination={{ clickable: true }}
    spaceBetween={16}
    slidesPerView={1.1}
  >
    {education.map((item, index) => (
      <SwiperSlide key={item.id}>
        <EducationCard
          degree={item.degree}
          institution={item.institution}
          duration={item.duration}
          description={item.description}
          index={index}
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

         <motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-100px" }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }}
  className="
    hidden
    lg:grid
    lg:grid-cols-3
    
    mt-10
  "
>
  {education.map((item, index) => (
    <EducationCard
      key={item.id}
      degree={item.degree}
      institution={item.institution}
      duration={item.duration}
      description={item.description}
      index={index}
    />
  ))}
</motion.div>
        </div>
 
      </Container>
    </SectionWrapper>
  );
};

export default EducationSection;