import heroImage from "@/assets/hero.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1600px] min-h-[75vh] flex flex-col md:flex-row items-center gap-10 xl:gap-20 px-6 lg:px-10 xl:px-16">

        {/* Left Content */}
        <div className="w-full md:w-1/2 xl:w-[55%] flex flex-col justify-center">

          <span className="text-sm font-bold tracking-[0.15em] uppercase mb-4">
            Fullstack Developer
          </span>

          <h1
            className="
              font-bold
              text-white
              leading-[0.9]
              mb-6
              text-[clamp(2.5rem,5vw,3.5rem)]
              md:text-[clamp(3.5rem,5vw,4.5rem)]
              lg:text-[clamp(4.5rem,6vw,5.5rem)]
              xl:text-[clamp(5.5rem,6vw,6.5rem)]
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
              mb-6
              max-w-[260px]
              xl:max-w-[320px]
            "
          >
            Through code, motion and storytelling.
          </p>

          <p
            className="
              hidden md:block
              text-sm
              leading-[1.8]
              text-text-2
              max-w-[400px]
              xl:max-w-[500px]
              mb-10
            "
          >
            I'm a fullstack developer and visual storyteller passionate
            about building scalable web applications and capturing real
            moments through technology, design, and creativity.
          </p>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4 max-w-[450px]">
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
        <div className="w-full md:w-1/2 xl:w-[45%] flex justify-center items-end">

          <div className="relative">

            <img
              src={heroImage}
              alt="Abhishek"
              className="
                w-full
                max-w-sm
                md:max-w-md
                lg:max-w-xl
                xl:max-w-2xl
                2xl:max-w-3xl
                max-h-screen
                object-contain
              "
            />

            {/* Mobile Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black via-black/60 to-transparent md:hidden">

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] flex flex-col gap-4">

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
    </section>
  );
};

export default HeroSection;