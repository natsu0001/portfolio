import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects">
      <Container>

        <div>

          <div className="flex flex-col ">
            <p>Featured Projects</p>

            <h2>
              Things I've built recently
            </h2>
          </div>

          <div className="flex gap-4 overflow-auto snap-x snap-mandatory ">
            {projects.slice(0, 3).map((project) => (
              <article
                key={project.id}
                className="
                  w-full
                  snap-center
                  md:min-w-0">
                    <projectCard project={project} />
              
             </article>
            ))}

          </div>

        </div>

      </Container>
    </SectionWrapper>
  );
};

export default ProjectsSection;