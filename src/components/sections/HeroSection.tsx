import Container from "../layout/Container";
import heroImage from "@/assets/hero.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
       <div className= "flex-1 p-8">
         <div>fullStack Devloper</div>
         <div> I BUILD<br />DIGITAL<br />EXPERIENCES</div>
         <div>Through code, motion and storytelling.</div>
         <div className= "hidden md:block">I'm a fullstack developer and visual storyteller passionate about building
          scalable web applications and capturing real moments.
         </div>
         <div className="hidden md:flex gap-4 mt-4">
         <button>view my work</button>
         <button>download resume</button>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">

              <div className="relative">
                <img
                 src={heroImage}
                 alt="Abhishek"
                 className="max-w-md w-full"
                 />

                 <div className= "absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col md:hidden gap-4">
              <button>view my work</button>
              <button>download resume</button>
              </div>
              </div>
              

      </div>

    </div>
  );
};

export default HeroSection;