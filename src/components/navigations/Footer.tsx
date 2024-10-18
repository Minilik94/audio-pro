import { Facebook, Instagram, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const getLinkClass = (to: string) =>
    `rounded-md px-3 py-2 font-medium tracking-widest 
     ${location.pathname === to ? "text-primary-100" : "text-white"}
     hover:text-primary-100`;

  return (
    <div className="bg-secondary-300 font-manrope mt-4">
      <div className="mx-auto  max-w-[72rem] grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex items-center  justify-center px-16 py-10 md:justify-start">
          <div className="flex flex-shrink-0 items-center cursor-pointer">
            <NavLink to="/">
              <img
                className="h-7 w-auto"
                src="/src/assets/audiophile-logo.svg"
                alt="audiophile-logo"
              />
            </NavLink>
          </div>
        </div>
        <div>
          <nav className="px-16  text-primary-300 flex items-center md:justify-start md:items-center lg:justify-center lg:items-center  justify-center text-sm leading-6 uppercase">
            <ul className="flex-1 tracking-widest items-center md:tracking-wider flex flex-col md:items-center  md:flex-row md:gap-10 gap-4 lg:items-center lg:leading-[8]">
              <li>
                {" "}
                <NavLink className={getLinkClass("/")} to={"/"}>
                  Home
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  className={getLinkClass("/earphones")}
                  to={"/earphones"}
                >
                  Earphones
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink className={getLinkClass("/speakers")} to={"/speakers"}>
                  speakers
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  className={getLinkClass("/headphones")}
                  to={"/headphones"}
                >
                  headphones
                </NavLink>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="grid grid-cols-1 max-w-[72rem] mx-auto lg:grid-cols-2 md:justify-start items-center justify-center w-full pb-8 space-y-8 px-6 md:px-8 ">
        <p className="text-secondary-700 text-center  px-16 py-10 md:px-8 md:text-start">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        {/* socials */}
        <div className="flex justify-center space-x-4 items-center order-3 w-full md:text-start md:justify-start md:px-8 lg:justify-center">
          <NavLink
            to={"/"}
            className="p-2 rounded-xl transition-colors duration-300"
          >
            <Facebook className="text-primary-300 hover:text-primary-100" />
          </NavLink>
          <NavLink
            to={"/"}
            className="p-2 rounded-xl transition-colors duration-300"
          >
            <X className="text-primary-300 hover:text-primary-100" />
          </NavLink>
          <NavLink
            to={"/"}
            className="p-2 rounded-xl transition-colors duration-300"
          >
            <Instagram className="text-primary-300 hover:text-primary-100" />
          </NavLink>
        </div>
        <p className="flex text-primary-300 font-bold md:justify-start md:text-start order-2 lg:order-3 justify-center space-x-4 items-center w-full md:px-8">
          Copyright 2024 . All Rights Reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
