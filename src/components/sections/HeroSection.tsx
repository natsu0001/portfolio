import heroImage from "@/assets/hero.png";
import { Button } from "@/components/ui/button";
import SectionWrapper from "../layout/SectionWrapper";
import Container from "../layout/Container";

const HeroSection = () => {
  return (
    <SectionWrapper id="home"  >
      <Container>
     
      <div
        className="
          
         
          
          flex
          flex-col
          justify-center
          
          sm:flex-row
          
         gap-8
         lg:gap-12
          
          
    
        "
      >
        {/* Left Content */}
        <div className="flex-1">
          <span className="text-sm font-bold tracking-[0.15em] uppercase mt-1 mb-4">
            Fullstack Developer
          </span>

          <h1
            className="
              font-bold
              text-white
              leading-[0.9]
              mb-4
              text-[3rem]
              sm:text-[2.5rem]
              md:text-[clamp(3.5rem,5vw,4.5rem)]
              
            "
          >
            I BUILD
            <br />
            DIGITAL
            <br />
            EXPERIENCES
          </h1>

          <p
            className="
              text-base
              font-semibold
              uppercase
              tracking-[0.08em]
              text-accent
              mb-4
              max-w-[260px]
              xl:max-w-[320px]
            "
          >
            Through code, motion and storytelling.
          </p>

          <p
            className="
            hidden lg:block
              text-sm
              leading-[1.8]
              text-text-2
              max-w-[400px]
              xl:max-w-[500px]
              mb-8
            "
          >
            I'm a fullstack developer and visual storyteller passionate
            about building scalable web applications and capturing real
            moments through technology, design, and creativity.
          </p>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex gap-4 max-w-[450px]">
            <Button
              className="flex-1 h-12 uppercase tracking-[0.15em]"
              variant="primary"
            >
              View My Work
            </Button>

            <Button
              className="flex-1 h-12 uppercase tracking-[0.15em]"
              variant="outline"
            >
              Download Resume
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative isolate ">
            <img
              src={heroImage}
              alt="Abhishek"
              className="
                w-full
                max-w-[400px]
                sm:max-w-[250px]
                md:max-w-md
                  
                
                object-contain
              "
            />

            {/* Mobile Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-48 sm:h-72 bg-gradient-to-t from-black via-black/60 to-transparent sm:hidden">
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm flex flex-col gap-4">
                <Button
                  className="h-12 uppercase tracking-[0.15em]"
                  variant="primary"
                >
                  View My Work
                </Button>

                <Button
                  className="h-12 uppercase tracking-[0.15em]"
                  variant="outline"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </SectionWrapper>
  );
};

export default HeroSection;