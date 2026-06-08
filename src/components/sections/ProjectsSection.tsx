import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import { projects } from "@/data/projects";
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
           {[1, 2, 3, 4].map((item) => (
  <article
    key={item}
    className="min-w-full snap-center md:min-w-0"
  >
    Project Card {item}
  </article>
))}
          

          </div>

        </div>

      </Container>
    </SectionWrapper>
  );
};

export default ProjectsSection;