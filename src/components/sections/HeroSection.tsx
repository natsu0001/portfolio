import Container from "../layout/Container";
import heroImage from "@/assets/hero.png";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col md:flex-row min-h-screen overflow-hidden">
       <div className= "md:w-1/2 p-4 max-w-[600px] ">
         <div className="text-sm font-bold  py-2" >FULLSTACK DEVELOPER</div>
         <h1 className="text-[clamp(3rem,4vw,5rem)] leading-[0.9] font-bold max-w-[700px] mb-2 md:text-[clamp(4rem,5vw,7rem)] leading-[0.92] text-white mb-4">
            I BUILD
            <br />
            DIGITAL
            <br />
            EXPERIENCES
        </h1>
         <div className="text-base font-semibold tracking-[0.05em] text-accent uppercase mb-2 md:max-w-[250px]">
           Through code, motion and storytelling.
         </div>
         <div className= "hidden md:block  text-sm text-text-2 leading-[1.7] max-w-[380px] mb-10">
          I'm a fullstack developer and visual storyteller <br/>
          passionate about building scalable web <br/>
          applications and capturing real moments.
         </div>
         <div className="hidden md:flex gap-4 mt-4">
         <button>view my work</button>
         <button>download resume</button>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col items-center ">

              <div className="relative">
                <img
                 src={heroImage}
                 alt="Abhishek"
                 className="max-w-md w-full max-h-[100vh] object-contain"
                 />
                <div className="absolute inset-x-0 bottom-0 h-70 bg-gradient-to-t from-black/100 to-transparent">
                 <div className= "absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col md:hidden gap-4">
                  <button>view my work</button>
                  <button>download resume</button>
                 </div>
                </div>
             </div>
              

      </div>

    </div>
  );
};

export default HeroSection;