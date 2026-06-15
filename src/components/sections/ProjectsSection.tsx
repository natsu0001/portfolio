import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects">
      <Container >

        <div>

          <div className="flex flex-col ">
            <p>Featured Projects</p>

            <h2 className="text-3xl font-bold">
              Things I've built recently
            </h2>
          </div>

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

  border-b
  border-r
  border-border

  p-6

  flex
  flex-col

  bg-bg
  hover:bg-bg-2

  transition-colors
  duration-300
"
    >
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
      
      {/* Project Image Placeholder */}
      <div
  className="
    relative
    w-full
    aspect-video
    bg-bg-2
    overflow-hidden
    mb-4
  "
>
  {/* Grid pattern */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
      backgroundSize: "20px 20px",
    }}
  />

  {/* Placeholder content */}

  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-sm font-semibold tracking-widest text-accent/40 uppercase">
      {project.title}
    </span>
  </div>
</div>

      <h3 className="text-xl font-semibold mb-2">
        {project.title}
      </h3>

      <p className="text-zinc-400 text-sm flex-grow">
        {project.description}
      </p>

      <div className="mt-4 flex gap-2 flex-wrap">
         {project.stack.map((tech) => (
    <span
      key={tech}
      className="px-2 py-1 text-xs rounded bg-zinc-800"
    >
      {tech}
    </span>
  ))}
      </div>
    </article>
  ))}
</div>

        </div>

      </Container>
    </SectionWrapper>
  );
};

export default ProjectsSection;