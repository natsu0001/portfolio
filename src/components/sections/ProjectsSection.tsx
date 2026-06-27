import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects">
      <Container>
      <div className="flex items-center justify-between"> 
        <motion.div
           className="flex-1"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
          >
         <SectionHeading
          label="Featured Projects"
          title="Things I've built recently"
        />
        </motion.div>
          <div className=" mt-10 flex justify-center">
          <a
            href="/projects"
            className="
              inline-flex
              items-center
              gap-2

              px-6
              py-3

              border
              border-border
              text-[0.6rem]

              md:text-xs
              uppercase
              tracking-[0.2em]

              transition-all
              duration-300

              hover:border-accent
              hover:text-accent
            "
          >
            View All Projects
            <ArrowUpRight size={14} />
          </a>
        </div>
        </div>

       {/* Mobile Swiper */}
<div className="mt-10 md:hidden">
  <Swiper
    modules={[Pagination]}
    pagination={{ clickable: true }}
    spaceBetween={20}
    slidesPerView={1.1}
  >
    {projects.slice(0, 4).map((project, index) => (
      <SwiperSlide key={project.id}>
        <ProjectCard
          project={project}
          index={index}
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

{/* Desktop Grid */}
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
    md:grid
    md:grid-cols-2
    xl:grid-cols-4
    
    mt-10
  "
>
  {projects.slice(0, 4).map((project, index) => (
    <ProjectCard
      key={project.id}
      project={project}
      index={index}
    />
  ))}
</motion.div>

        {/* CTA */}
      
      </Container>
    </SectionWrapper>
  );
};

export default ProjectsSection;