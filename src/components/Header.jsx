import { useState } from "react";
import logo from "../assets/images/svg/logo.svg";
import iconHamburger from "../assets/images/svg/icon-hamburger.svg";
import iconClose from "../assets/images/svg/icon-close.svg";
import { navItems, generarNavItems } from "./GenerarNavItems";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={`w-full flex justify-between items-center`}>
      <div className="w-full flex justify-between items-center">
        <img src={logo} className="w-36 md:w-44" alt="Logo" />
        <img
          className={`md:hidden `}
          src={iconHamburger}
          alt="Icono de menú"
          onClick={handleOpenMenu}
        />
      </div>
      <nav className="cont_nav">
        <ul className=" justify-between space-x-5 text-white font-alata hidden md:flex">
          {generarNavItems(navItems)}
        </ul>
      </nav>

      {/* nav mobile */}
      <div
        className={`md:hidden w-full h-full absolute right-0 top-0 z-10 bg-black p-6 
      transform ${
        openMenu ? "translate-y-0" : "-translate-y-full"
      } transition-transform`}
      >
        <div className="w-full flex justify-between items-center">
          <img src={logo} className="w-36" alt="Logo" />
          <img
            className="md:hidden"
            src={iconClose}
            alt="Icono de cerrar"
            onClick={handleOpenMenu}
          />
        </div>
        <ul className="w-1/4 text-VeryDarkGray mt-32 text-2xl uppercase flex flex-col space-y-2">
          {generarNavItems(navItems)}
        </ul>
      </div>
    </div>
  );
}

export default Header;
