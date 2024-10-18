import { Gallery } from "../../shared/types";
import { useEffect, useState } from "react";

const ProductGallary = ({ gallery }: { gallery: Gallery }) => {
  const { first, second, third } = gallery;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-3 md:grid-rows-2 md:grid-cols-3 h-full w-full px-8 gap-2 md:gap-6 lg:gap-16 font-manrope mt-9">
      <div
        className="min-h-[18rem] h-full w-full rounded-lg p-12"
        style={{
          ...(windowWidth >= 1024 && {
            backgroundImage: `url(/${first.desktop})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center ",
            backgroundSize: "cover",
          }),
          ...(windowWidth < 1024 && {
            backgroundImage: `url(/${first.tablet})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }),
          // small screen
          ...(windowWidth < 640 && {
            backgroundImage: `url(/${first.mobile})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }),
        }}
      ></div>
      <div
        className="min-h-[18rem] md:order-3 lg:order-3 w-full rounded-lg  p-12"
        style={{
          ...(windowWidth >= 1024 && {
            backgroundImage: `url(/${second.desktop})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center ",
            backgroundSize: "cover",
          }),
          ...(windowWidth < 1024 && {
            backgroundImage: `url(/${second.tablet})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }),
          // small screen
          ...(windowWidth < 640 && {
            backgroundImage: `url(/${second.mobile})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "cover",
          }),
        }}
      ></div>
      <div
        className="min-h-[28rem]  h-full lg:order-2 md:order-2 md:col-span-2 lg:col-span-2 lg:row-span-2 md:row-span-2 w-full rounded-lg p-12 "
        style={{
          ...(windowWidth >= 1024 && {
            backgroundImage: `url(/${third.desktop})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center ",
            backgroundSize: "cover",
          }),
          ...(windowWidth < 1024 && {
            backgroundImage: `url(/${third.tablet})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }),
          // small screen
          ...(windowWidth < 640 && {
            backgroundImage: `url(/${third.mobile})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "cover",
            height: "28rem"
          }),
        }}
      ></div>
    </div>
  );
};
export default ProductGallary;
