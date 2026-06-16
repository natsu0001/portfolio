import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects">
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
              Featured Projects
            </p>
          </div>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              tracking-tight
              max-w-xl
            "
          >
            Things I've built recently
          </h2>
        </div>

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