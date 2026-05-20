import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects">
      <Container>

        <div>

          <div>
            <p>Featured Projects</p>

            <h2>
              Things I've built recently
            </h2>
          </div>

          <div>

            <article>
              Project Card
            </article>

            <article>
              Project Card
            </article>

            <article>
              Project Card
            </article>

          </div>

        </div>

      </Container>
    </SectionWrapper>
  );
};

export default ProjectsSection;