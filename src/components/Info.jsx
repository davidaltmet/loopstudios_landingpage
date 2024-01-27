import image_interactive from "../assets/images/desktop/image-interactive.jpg";
import useScrollAnimation from "./useScrollAnimation";

function Info() {
  const { showAnimation, sectionRef } = useScrollAnimation();
  return (
    <div
      id="info"
      className="w-full p-6 pt-14  md:h-screen md:py-12 md:px-16  xl:py-20 xl:px-32 relative overflow-hidden"
    >
      <div
        ref={sectionRef}
        className={`w-full md:w-1/2 xl:w-7/12 transform ${
          showAnimation
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        } ease-in-out duration-500`}
      >
        <img src={image_interactive} className="w-full" />
      </div>
      <div
        className={`w-full mt-5 md:w-1/2 xl:w-5/12 md:absolute md:top-32 md:right-20 xl:top-48 xl:right-40 md:p-10 max-xl::p-16 grid gap-4 text-center md:text-start bg-white transform ${
          showAnimation
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }  ease-in-out duration-500`}
      >
        <h3 className="text-black font-alata uppercase text-3xl md:text-4xl  lg:text-5xl  tracking-wider">
          The leader in interactive VR
        </h3>
        <p className="font-josefin-sans text-VeryDarkGray leading-8 md:leading-6 xl:leading-8">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
}

export default Info;
