import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience">
      <Container>

        <div>

          {/* Section Header */}
          <div>

            <p>
              Experience
            </p>

            <h2>
              My professional journey
            </h2>

          </div>

          {/* Timeline */}
          <div>

            <article>

              <div>
                2025 - Present
              </div>

              <div>

                <h3>
                  Fullstack Developer
                </h3>

                <p>
                  Building scalable web applications.
                </p>

              </div>

            </article>

            <article>

              <div>
                2024 - 2025
              </div>

              <div>

                <h3>
                  Frontend Developer
                </h3>

                <p>
                  Developed responsive interfaces.
                </p>

              </div>

            </article>

          </div>

        </div>

      </Container>
    </SectionWrapper>
  );
};

export default ExperienceSection;