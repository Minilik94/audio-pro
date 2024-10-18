import { ChevronRight, CircleX, Menu, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "@fontsource/manrope";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";
import HomeCardsNav from "../home_page/HomeCardsNav";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="bg-secondary-300 font-manrope sticky top-0 z-20 ">
      <div className="mx-auto max-w-[72rem] px-2 sm:px-6 space-y-4 lg:py-4 z-50">
        {/* Navbar Container */}
        <div className="relative flex h-16 items-center justify-between border-b-0">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 text-white flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Menu
                  className="hover:text-primary-100 hover:bg-transparent hover:border-none"
                  aria-hidden="true"
                />
              ) : (
                <CircleX
                  className="hover:text-primary-100 hover:bg-transparent hover:border-none"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center cursor-pointer">
              <NavLink to="/" className="z-50 ml-12 lg:ml-0">
                <img
                  className="h-7 w-auto"
                  src="/src/assets/audiophile-logo.svg"
                  alt="audiophile-logo"
                />
              </NavLink>
            </div>
          </div>

          {/* Navigation Links for Large Screens */}
          <div className="hidden sm:block md:hidden w-full lg:flex items-center justify-center  ">
            <div className="lg:flex space-x-4 sm:hidden md:hidden -z-0 text-sm ">
              <NavLink
                onClick={closeMenu}
                to="/"
                className="rounded-md px-3 py-2  font-medium tracking-widest text-primary-100  hover:text-primary-100"
                aria-current="page"
              >
                HOME
              </NavLink>
              <NavLink
                onClick={closeMenu}
                to="/headphones"
                className="rounded-md px-3 py-2  font-medium tracking-widest text-white hover:text-primary-100"
              >
                HEADPHONES
              </NavLink>
              <NavLink
                onClick={closeMenu}
                to="/speakers"
                className="rounded-md px-3 py-2  font-medium tracking-widest text-white hover:text-primary-100"
              >
                SPEAKERS
              </NavLink>

              <NavLink
                onClick={closeMenu}
                to="/earphones"
                className="rounded-md px-3 py-2  font-medium tracking-widest text-white hover:text-primary-100"
              >
                EARPHONES
              </NavLink>
            </div>
          </div>

          {/* Shopping Cart */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <button type="button" className="text-white">
              <ShoppingCart className="hover:text-primary-100" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Images */}
      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
        onClick={closeMenu}
      >
        <HomeCardsNav textColor="text-secondary-200" />
      </div>
      <div className="max-w-[68rem]  mx-auto px-2 border-t border-t-secondary-400"></div>
    </nav>
  );
};

export default Navbar;
