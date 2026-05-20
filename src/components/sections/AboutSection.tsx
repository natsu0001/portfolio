import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <Container>

        <div>

          {/* Content */}
          <div>

            <p>
              About Me
            </p>

            <h2>
              More about me
            </h2>

            <p>
              I build scalable and engaging digital experiences.
            </p>

          </div>

          {/* Stats */}
          <div>

            <div>
              5+ Years Experience
            </div>

            <div>
              30+ Projects
            </div>

            <div>
              10+ Happy Clients
            </div>

          </div>

        </div>

      </Container>
    </SectionWrapper>
  );
};

export default AboutSection;