import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const HomeCards = ({ textColor = "text-primary-200" }) => {
  const items = [
    {
      image: "/src/assets/headphones.webp",
      alt: "Headphones",
      link: "/headphones",
    },
    {
      image: "/src/assets/speakers.webp",
      alt: "Speakers",
      link: "/speakers",
    },
    {
      image: "/src/assets/earphones.webp",
      alt: "Earphones",
      link: "/earphones",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mx-auto py-4 max-w-[69.375rem] overflow-hidden font-manrope">
      {items.map((item, index) => (
        <NavLink
          to={item.link}
          key={index}
          className="relative flex flex-col items-center justify-center text-center p-4 group"
        >
          <div className="w-full max-w-sm bg-third border mt-24 mx-auto border-gray-200 rounded-lg shadow relative">
            <NavLink to={item.link}>
              <img
                className="absolute inset-0 w-full h-full object-scale-down -top-24 right-0 bottom-0 left-0 transition-transform duration-300 group-hover:scale-105"
                src={item.image}
                alt={item.alt}
              />
            </NavLink>
            <div className="mx-auto w-full flex flex-col space-y-2 px-16 mt-20">
              <a href="/">
                <h5 className="text-lg flex items-center justify-center uppercase font-semibold -mb-8 tracking-widest leading-loose">
                  {item.alt}
                </h5>
              </a>
              <div className="flex items-center justify-center w-full py-6">
                <NavLink
                  to={item.link}
                  className={`flex items-center uppercase transition-colors font-bold font-manrope text-sm group-hover:text-primary-100`}
                >
                  <span className="tracking-widest leading-loose">Shop</span>
                  <ChevronRight size={12} className="text-xs" />
                </NavLink>
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default HomeCards;
