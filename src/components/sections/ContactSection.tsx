import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import { contactData } from "@/data/contact";
import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <Container>
        <div
          className="
            border
            border-border
            p-8
            md:p-12
          "
        >
          {/* Header */}

          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-accent" />

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-accent
                "
              >
                Contact
              </p>
            </div>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                mb-4
              "
            >
              Let's Build Something Meaningful.
            </h2>

            <p
              className="
                text-text-2
                max-w-2xl
                leading-relaxed
              "
            >
              Whether it's a product, collaboration,
              creative project or simply a conversation,
              I'm always open to connecting with
              passionate people.
            </p>
          </div>

          {/* Actions */}

          <div
            className="
            
              flex
              
              sm:flex-row
              gap-4
              mb-10
             
            "
          >
            <Button  asChild variant="primary">
              <a href={`mailto:${contactData.email}`}>
                Email Me
              </a>
            </Button>

            <Button asChild variant="outline">
              <a href={contactData.resume}>
                Download Resume
              </a>
            </Button>
          </div>

          {/* Links */}

          <div
            className="
              grid
              md:grid-cols-2
              xl:grid-cols-4
              gap-4
            "
          >
            <a
              href={contactData.github}
              target="_blank"
              className="
                border
                border-border
                p-5
                flex
                items-center
                justify-between
                hover:bg-bg-2
                transition-colors
              "
            >
              <span>Github</span>
              <SiGithub size={18} />
            </a>

            <a
              href={contactData.linkedin}
              target="_blank"
              className="
                border
                border-border
                p-5
                flex
                items-center
                justify-between
                hover:bg-bg-2
                transition-colors
              "
            >
              <span>LinkedIn</span>
              <FaLinkedin size={18} />
            </a>

            <a
              href={contactData.blog}
              target="_blank"
              className="
                border
                border-border
                p-5
                flex
                items-center
                justify-between
                hover:bg-bg-2
                transition-colors
              "
            >
              <span>Blog</span>
              <ArrowUpRight size={18} />
            </a>

            <a
              href={contactData.photography}
              target="_blank"
              className="
                border
                border-border
                p-5
                flex
                items-center
                justify-between
                hover:bg-bg-2
                transition-colors
              "
            >
              <span>Photography</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default ContactSection;