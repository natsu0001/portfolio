import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <Container>

        <div>

          {/* Heading */}
          <div>

            <p>
              Get In Touch
            </p>

            <h2>
              Let's build something amazing together.
            </h2>

          </div>

          {/* Contact Info */}
          <div>

            <a href="mailto:hello@example.com">
              hello@example.com
            </a>

          </div>

          {/* Socials */}
          <div>

            <a href="/">
              LinkedIn
            </a>

            <a href="/">
              GitHub
            </a>

            <a href="/">
              Instagram
            </a>

          </div>

        </div>

      </Container>
    </SectionWrapper>
  );
};

export default ContactSection;