import aboutImage from "@/assets/about.png";

import Container from "../layout/Container";
import SectionWrapper from "../layout/SectionWrapper";
import { aboutData } from "@/data/about";

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <Container>
        <div
          className="
            grid
            gap-12
            lg:grid-cols-2
            items-center
          "
        >
          {/* Image */}

         <div className="hidden lg:block relative max-w-xl mx-auto w-full">
  {/* Background Glow */}
  <div className="absolute inset-0 bg-accent/10 blur-3xl " />

  {/* Darkness Wrapper Container */}
  <div className="relative z-10 w-full overflow-hidden bg-zinc-950 rounded-md">
    <img
      src={aboutImage}
      alt="Abhishek"
      className="
        w-full
        h-auto
        block
        object-cover
        [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]
      "
    />
  </div>
</div>

          {/* Content */}

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-accent" />

              <p
                className="
                  text-gold
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-accent
                "
              >
                About Me
              </p>
            </div>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                leading-tight
                mb-6
              "
            >
              {aboutData.title}
            </h2>

            <p
              className="
                text-text-2
                leading-relaxed
                mb-5
              "
            >
              {aboutData.intro}
            </p>

            <p
              className="
                text-text-2
                leading-relaxed
                mb-10
              "
            >
              {aboutData.story}
            </p>

            {/* Stats */}

            <div
              className="
                grid
                grid-cols-3
                gap-4
              "
            >
              {aboutData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    border
                    border-border
                    p-4
                  "
                >
                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-accent
                    "
                  >
                    {stat.value}
                  </h3>

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wider
                      text-text-2
                    "
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative lg:hidden max-w-xl mx-auto w-full">
  {/* Background Glow */}
  <div className="absolute inset-0 bg-accent/10 blur-3xl " />

  {/* Darkness Wrapper Container */}
  <div className="relative z-10 w-full overflow-hidden bg-zinc-950 rounded-md">
    <img
      src={aboutImage}
      alt="Abhishek"
      className="
        w-full
        h-auto
        block
        object-cover
        [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]
      "
    />
  </div>
</div>

        </div>
      </Container>
    </SectionWrapper>
  );
};

export default AboutSection;