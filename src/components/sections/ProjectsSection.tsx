import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

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
          {projects.slice(0, 4).map((project) => (
            <article
              key={project.id}
              className="
                group
                relative

                min-w-[85%]
                sm:min-w-[65%]
                md:min-w-0

                snap-center

                border-r
                border-b
                border-border

                p-6

                flex
                flex-col

                bg-bg

                transition-all
                duration-300

                hover:bg-bg-2
              "
            >
              {/* Hover Arrow */}
              <a
                href={project.link || "#"}
                aria-label={`View ${project.title}`}
                className="
                  absolute
                  top-5
                  right-5

                  w-8
                  h-8

                  border
                  border-border

                  flex
                  items-center
                  justify-center

                  opacity-0
                  translate-x-1
                  -translate-y-1

                  transition-all
                  duration-200

                  group-hover:opacity-100
                  group-hover:translate-x-0
                  group-hover:translate-y-0
                "
              >
                <ArrowUpRight
                  size={14}
                  className="text-accent"
                />
              </a>

              {/* Thumbnail */}
              <div
                className="
                  relative
                  w-full
                  aspect-video
                  bg-bg-2
                  overflow-hidden
                  mb-5
                "
              >
                {/* Grid Pattern */}
                <div
                  className="absolute inset-0 bg-grid"
                 
                />

                {/* Project Preview */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="
                      text-xs
                      font-semibold
                      tracking-[0.3em]
                      uppercase
                      text-accent/40
                    "
                  >
                    {project.title}
                  </span>
                </div>
              </div>

              {/* Accent Hover Line */}
              <div
                className="
                  h-px
                  w-0
                  bg-accent

                  transition-all
                  duration-300

                  group-hover:w-full

                  mb-4
                "
              />

              {/* Title */}
              <h3
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                  mb-3
                "
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-[0.75rem]
                  leading-relaxed
                  text-text-2
                  flex-grow
                "
              >
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-2
                      py-1

                      text-[10px]

                      uppercase
                      tracking-widest

                      border
                      border-border

                      transition-colors
                      duration-300

                      group-hover:border-accent/40
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default ProjectsSection;