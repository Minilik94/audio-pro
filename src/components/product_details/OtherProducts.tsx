import { NavLink } from "react-router-dom";
import { Other } from "../../shared/types";
import { useEffect, useState } from "react";

const OtherProducts = ({ others }: { others: Other[] }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(others, "related Product");
  return (
    <div className="max-w-[72rem] mx-auto h-full shadow-none relative overflow-hidden font-manrope px-2 w-full my-9 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {others.length > 0 &&
          others.map((other, index) => (
            <div
              className="flex flex-col px-6 justify-center space-y-8 items-center"
              key={index}
            >
              <div
                className="min-h-[18rem] h-full w-full rounded-lg p-12"
                style={{
                  ...(windowWidth >= 1024 && {
                    backgroundImage: `url(/${other?.image.desktop})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center ",
                    backgroundSize: "cover",
                  }),
                  ...(windowWidth < 1024 && {
                    backgroundImage: `url(/${other?.image.tablet})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }),
                  // small screen
                  ...(windowWidth < 640 && {
                    backgroundImage: `url(/${other?.image.mobile})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }),
                }}
              ></div>
              <h3 className="text-2xl tracking-wider font-semibold">
                {other.name}
              </h3>
              <NavLink
                to={`${/product/}${other.slug}`}
                className="bg-primary-100 hover:bg-secondary-100 transition-colors duration-300 text-white px-6 py-3
          text-sm uppercase tracking-wide"
              >
                See Product
              </NavLink>
            </div>
          ))}
      </div>
    </div>
  );
};
export default OtherProducts;
