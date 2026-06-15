import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import { projects } from "@/data/projects";
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
        min-w-[90%]
        sm:min-w-[70%]
        md:min-w-0
        min-h-[350px]
        snap-center
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
        p-6
        shadow-lg
        flex
        flex-col
      "
    >
      {/* Project Image Placeholder */}
      <div className="h-40 rounded-xl bg-zinc-800 mb-4" />

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