import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";

const HeroSection = () => {
  return (
    <SectionWrapper id="home">
      <Container>
        <div className="flex flex-col gap-10">

          {/* Top Content */}
          <div className="flex flex-col gap-6">

            <p>
              Fullstack Developer
            </p>

            <h1>
              I Build Digital Experiences
            </h1>

            <p>
              Through code, motion and storytelling.
            </p>

            <div>
              <button>
                View My Work
              </button>

              <button>
                Download Resume
              </button>
            </div>

          </div>

          {/* Hero Image */}
          <div>
            Hero Image
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
};

export default HeroSection;