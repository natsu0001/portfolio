"use client";

import heroImage from "@/assets/hero.png";
import { Button } from "@/components/ui/button";
import SectionWrapper from "../layout/SectionWrapper";
import Container from "../layout/Container";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <SectionWrapper id="home">
       <div className="relative overflow-hidden">

    {/* Hero Grid */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.08) 1px,transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />

    {/* Dark Gold Glow Behind Image */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 75% 40%, rgba(184,134,11,0.12) 0%, transparent 55%)",
      }}
    />
    <div
  className="
    absolute inset-0
    pointer-events-none
    bg-gradient-to-t
    from-black
    via-black/10
    to-transparent
  "
/>

    <div className="relative z-10  ">

      <Container>
        
        <div
          className="
            pt-15
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
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {/* Role */}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                }}
                className="
                  block
                  text-gold
                  text-sm
                  font-bold
                  tracking-[0.15em]
                  uppercase
                  mt-1
                  mb-4
                "
              >
                Fullstack Developer
              </motion.span>

              {/* Heading */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8 },
                  },
                }}
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
              </motion.h1>

              {/* Accent Text */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                }}
                className="
                  text-base
                  text-gold
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
              </motion.p>

              {/* Description */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                }}
                className="
                  hidden
                  lg:block

                  text-sm
                  leading-[1.8]
                  text-text-2

                  max-w-[400px]
                  xl:max-w-[500px]

                  mb-8
                "
              >
                I'm a fullstack developer and visual storyteller
                passionate about building scalable web applications
                and capturing real moments through technology,
                design, and creativity.
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                }}
                className="hidden sm:flex gap-4 max-w-[450px]"
              >
                <Button
                  className="
                    flex-1
                    h-12
                    uppercase
                    tracking-[0.15em]
                  "
                  variant="primary"
                >
                  View My Work
                </Button>

                <Button
                  className="
                    flex-1
                    h-12
                    uppercase
                    tracking-[0.15em]
                  "
                  variant="outline"
                >
                  Download Resume
                </Button>
              </motion.div>

              {/* Scroll Indicator */}
              
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            



            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                x: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="relative isolate"
            >
              <img
                src={heroImage}
                alt="Abhishek"
                className="
                  w-full
                  max-w-[400px]
                  sm:max-w-[250px]
                  md:max-w-[300px]
                  lg:max-w-md

                  object-contain
                "
              />
              <div
                   className="
                   absolute inset-0
                   bg-gradient-to-t
                   from-black
                   via-black/10
                   to-transparent
                   pointer-events-none
                 "
                />

              {/* Mobile Buttons */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0

                  h-48
                  sm:h-72

                  bg-gradient-to-t
                  from-black
                  via-black/60
                  to-transparent

                  sm:hidden
                "
              >
                <div
                  className="
                    absolute
                    bottom-4
                    left-1/2
                    -translate-x-1/2

                    w-[90%]
                    max-w-sm

                    flex
                    flex-col
                    gap-4
                  "
                >
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
            </motion.div>
          </div>
        </div>
      </Container>
      </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;