import zx7 from "../assets/home/desktop/image-speaker-zx7.jpg";
import zx7_tablet from "../assets/home/tablet/image-speaker-zx7.jpg";
import zx7_mobile from "../assets/home/mobile/image-speaker-zx7.jpg";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const HomeCardZX7 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-[69.375rem] mx-auto h-full flex items-center justify-center shadow-none relative overflow-hidden font-manrope px-2 w-full my-9">
      <div
        className={`bg-transparent transition-all duration-300 w-full h-full flex items-center min-h-80 rounded-lg  bg-URL(${zx7})`}
        style={{
          ...(windowWidth >= 1024 && {
            backgroundImage: `url(${zx7})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            backgroundSize: "cover",
          }),
          ...(windowWidth < 1024 && {
            backgroundImage: `url(${zx7_tablet})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "right",
          }),
          // small screen
          ...(windowWidth < 640 && {
            backgroundImage: `url(${zx7_mobile})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "right",
          }),
        }}
      >
        <div className="flex flex-col h-full justify-center px-16">
          <h3 className="uppercase text-3xl leading-7 mb-7 mx-auto font-bold tracking-widest">
            ZX7 Speaker
          </h3>
          <div className="">
            <NavLink
              to={"/product/zx7-speaker"}
              className="lg:text-start bg-transparent border border-primary-200 rounded-sm text-secondary-300 font-extrabold mx-auto transition-all duration-600 px-8 py-4
          text-xs uppercase tracking-widest hover:bg-secondary-300 hover:text-secondary-200"
            >
              See Product
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeCardZX7;
