import { useState } from "react";
import CreationCard from "./CreationCard";
import useScrollAnimation from "./useScrollAnimation";

// Importa las imágenes
import imagen1 from "../assets/images/desktop/image-deep-earth.jpg";
import imagen2 from "../assets/images/desktop/image-night-arcade.jpg";
import imagen3 from "../assets/images/desktop/image-soccer-team.jpg";
import imagen4 from "../assets/images/desktop/image-grid.jpg";
import imagen5 from "../assets/images/desktop/image-from-above.jpg";
import imagen6 from "../assets/images/desktop/image-pocket-borealis.jpg";
import imagen7 from "../assets/images/desktop/image-curiosity.jpg";
import imagen8 from "../assets/images/desktop/image-fisheye.jpg";
import imagen1_mobile from "../assets/images/mobile/image-deep-earth.jpg";
import imagen2_mobile from "../assets/images/mobile/image-night-arcade.jpg";
import imagen3_mobile from "../assets/images/mobile/image-soccer-team.jpg";
import imagen4_mobile from "../assets/images/mobile/image-grid.jpg";
import imagen5_mobile from "../assets/images/mobile/image-from-above.jpg";
import imagen6_mobile from "../assets/images/mobile/image-pocket-borealis.jpg";
import imagen7_mobile from "../assets/images/mobile/image-curiosity.jpg";
import imagen8_mobile from "../assets/images/mobile/image-fisheye.jpg";

const images = [
  { desktop: imagen1, mobile: imagen1_mobile, title: "deep earth" },
  { desktop: imagen2, mobile: imagen2_mobile, title: "night arcade" },
  { desktop: imagen3, mobile: imagen3_mobile, title: "soccer team vr" },
  { desktop: imagen4, mobile: imagen4_mobile, title: "the grid" },
  { desktop: imagen5, mobile: imagen5_mobile, title: "From up above VR" },
  { desktop: imagen6, mobile: imagen6_mobile, title: "Pocket borealis" },
  { desktop: imagen7, mobile: imagen7_mobile, title: "The curiosity" },
  { desktop: imagen8, mobile: imagen8_mobile, title: "Make it fisheye" },
];

function Creation() {
  const { showAnimation, sectionRef } = useScrollAnimation();

  const [openCreations, setOpenCreations] = useState(false);
  const [openCreationsMobile, setOpenCreationsMobile] = useState(false);

  const handleButtonSeeAll = () => {
    setOpenCreations(!openCreations);
  };

  const handleButtonSeeAllMobile = () => {
    setOpenCreationsMobile(!openCreationsMobile);
  };

  return (
    <div id="creation" className="w-full p-6  md:px-16 md:py-5 xl:px-32 ">
      <div
        ref={sectionRef}
        className="w-full  flex justify-between items-center pb-5 overflow-hidden"
      >
        <h2
          className={`w-full md:w-80 text-3xl text-center md:text-start md:text-4xl uppercase tracking-wider transform  ${
            showAnimation
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          } ease-in-out duration-300 `}
        >
          Our creations
        </h2>

        {/* mostrar see all en dispositivos grandes */}
        <button
          className={`py-2 text-xl uppercase px-14 border-2 border-gray-800 
          cursor-pointer hover:bg-black hover:text-white   font-semibold   transform ${
            showAnimation
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } ease-in-out duration-300 hidden md:flex 
          }`}
          onClick={handleButtonSeeAll}
        >
          {openCreations ? "see less" : "see all"}
        </button>
      </div>

      {/* Mostrar cards en dispositivos móviles */}
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 md:hidden ">
        {images.slice(0, 4).map((image, index) => (
          <CreationCard
            key={index}
            image={image.mobile}
            titleCard={image.title}
          />
        ))}
      </div>
      <div
        className={`overflow-hidden transform transition-transform ${
          openCreationsMobile
            ? "translate-y-0 flex "
            : "-translate-y-full hidden  "
        }  `}
      >
        <div
          className={`w-full pt-5 grid gap-6 md:gap-0 grid-cols-1 md:grid-cols-4 md:hidden  `}
        >
          {images.slice(4, 8).map((image, index) => (
            <CreationCard
              key={index}
              image={image.mobile}
              titleCard={image.title}
            />
          ))}
        </div>
      </div>

      {/* Botón "see all" en dispositivos móviles */}
      <div className="w-full text-center">
        <button
          className={`mt-6 md:mt-0 py-2 text-xl uppercase px-14 border-2 border-gray-800 order-4
          cursor-pointer hover:bg-black hover:text-white   font-semibold  transform ${
            showAnimation
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          } ease-in-out duration-300 md:hidden`}
          onClick={handleButtonSeeAllMobile}
        >
          see all
        </button>
      </div>

      {/* Mostrar cards en pantallas grandes */}

      <div className="hidden w-full md:grid grid-cols-4 gap-6 ">
        {images.slice(0, 4).map((image, index) => (
          <CreationCard
            key={index}
            image={image.desktop}
            titleCard={image.title}
          />
        ))}
      </div>
      <div
        className={`overflow-hidden transform transition-transform ${
          openCreations ? "translate-y-0 flex " : "-translate-y-full hidden"
        } `}
      >
        <div className=" w-full h-full md:grid grid-cols-4 gap-6 pt-10 ">
          {images.slice(4, 8).map((image, index) => (
            <CreationCard
              key={index}
              image={image.desktop}
              titleCard={image.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Creation;
