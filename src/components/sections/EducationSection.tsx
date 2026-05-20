import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";

const EducationSection = () => {
  return (
    <SectionWrapper id="education">
      <Container>

        <div>

          {/* Header */}
          <div>

            <p>
              Education
            </p>

            <h2>
              Education & Certifications
            </h2>

          </div>

          {/* Cards */}
          <div>

            <article>

              <h3>
                Bachelor of Computer Applications
              </h3>

              <p>
                University Name
              </p>

              <span>
                2021 - 2025
              </span>

            </article>

            <article>

              <h3>
                Fullstack Web Development
              </h3>

              <p>
                Udemy
              </p>

              <span>
                Certificate
              </span>

            </article>

          </div>

        </div>

      </Container>
    </SectionWrapper>
  );
};

export default EducationSection;