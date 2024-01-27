import React from "react";
import { generarNavItems, navItems } from "./GenerarNavItems";
import logo from "../assets/images/svg/logo.svg";
import iconFacebook from "../assets/images/svg/icon-facebook.svg";
import iconTwitter from "../assets/images/svg/icon-twitter.svg";
import iconPinterest from "../assets/images/svg/icon-pinterest.svg";
import iconInstagram from "../assets/images/svg/icon-instagram.svg";

const generarIconRed = (img) => {
  return (
    <li key={img} className="relative group">
      <a href="#">
        <img src={img} />
      </a>
      <div className="w-0 h-1 bg-white  absolute -bottom-2 left-0 rounded group-hover:w-full transition-all "></div>
    </li>
  );
};

function Footer() {
  const redesSociales = [
    iconFacebook,
    iconTwitter,
    iconPinterest,
    iconInstagram,
  ];

  return (
    <div className="mt-20 md:mt-28 bg-black py-5 px-10 md:py-10 md:px-16 xl:py-12 xl:px-32 flex flex-col md:flex-row  md:justify-between w-full ">
      <div className=" flex flex-col items-center md:items-start gap-4">
        <img src={logo} className="w-40" />
        <ul className="justify-between md:space-x-5 md:space-y-0 space-y-2 text-white font-alata  flex flex-col md:flex-row">
          {generarNavItems(navItems)}
        </ul>
      </div>
      <div className="mt-10 md:mt-0 grid w-full md:w-1/2 gap-4  ">
        <ul className="flex justify-center  md:justify-end space-x-5 ">
          {redesSociales.map((icon) => generarIconRed(icon))}
        </ul>
        <span className=" text-DarkGray font-alata text-center md:text-end">
          © 2021 Loopstudios. All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
