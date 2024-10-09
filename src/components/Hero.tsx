import HeroImg from "../assets/home/desktop/headphone-hero-image.png";
import "@fontsource/manrope";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";

const Hero = () => {
  return (
    <div className="relative bg-secondary-300 flex flex-col lg:flex-row lg:-mt-10 items-center justify-between w-full px-4 font-manrope max-w-[69.375rem]">
      {/* Background image for small screens */}
      <div className="absolute inset-0 lg:hidden flex items-center justify-center">
        <div className=" transition-all bg-transparent block">
          <div className="relative inline-block max-w-full m-0 overflow-hidden">
            <div className="block m-0 p-0">
              <img
                src={HeroImg}
                alt="background"
                className="w-11/12 h-auto max-h-[70vh] max-w-full block p-0 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center px-6 py-12 lg:py-0 lg:px-16 text-center lg:text-left min-h-screen">
        <div className="max-w-md">
          <p className="text-sm uppercase tracking-[0.5em] text-primary-100 font-bold mb-4">
            New product
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            XX99 Mark II Headphones
          </h1>
          <p className="text-white text-opacity-75 text-lg mb-8">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="bg-primary-100 hover:bg-secondary-100 transition-colors duration-300 text-white px-8 py-4
          text-xs uppercase tracking-widest font-bold">
            See Product
          </button>
        </div>
      </div>

      {/* Image for large screens */}
      <div className="hidden lg:block w-full lg:w-1/2 h-screen overflow-hidden lg:px-24">
        <img
          src={HeroImg}
          alt="hero"
          className="w-full h-full object-scale-down object-center lg:object-right"
        />
      </div>
    </div>
  );
};

export default Hero;


