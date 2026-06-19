import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import ProjectCard from "./ProjectCard";
const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects">
      <Container>
        {/* Header */}
<SectionHeading
  label="Featured Projects"
  title="Things I've built recently"
/>

        {/* Projects */}
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

            md:grid
            md:grid-cols-2
            xl:grid-cols-4

            md:gap-0
            md:overflow-visible
          "
        >
          {projects.slice(0, 4).map((project, index) => (
             <ProjectCard
    key={project.id}
    project={project}
    index={index}
  />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default ProjectsSection;