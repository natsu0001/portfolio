import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";

const TechStackSection = () => {
  return (
    <SectionWrapper id="tech-stack">
      <Container>

        <div>

          {/* Header */}
          <div>

            <p>
              Tech Stack
            </p>

            <h2>
              Technologies I work with
            </h2>

          </div>

          {/* Skills Grid */}
          <div>

            <div>
              React
            </div>

            <div>
              TypeScript
            </div>

            <div>
              Next.js
            </div>

            <div>
              Node.js
            </div>

            <div>
              PostgreSQL
            </div>

          </div>

        </div>

      </Container>
    </SectionWrapper>
  );
};

export default TechStackSection;