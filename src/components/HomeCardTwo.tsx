import Pattern from "../assets/cart/pattern-circles.svg";

const HomeCardTwo = () => {
  return (
    <div className="max-w-[69.375rem] mx-auto h-full flex items-center justify-center shadow-none relative overflow-hidden font-manrope px-2">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 rounded-lg shadow-secondary-100 shadow-lg bg-primary-100 w-full"
        style={{
          ...(window.innerWidth >= 1024 && {
            backgroundImage: `url(${Pattern})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "left -rem",
          }),

          ...(window.innerWidth < 1024 && {
            backgroundImage: `url(${Pattern})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }),
        }}
      >
        <div className="lg:h-full px-24 lg:flex p-12 items-end justify-center lg:py-24 lg:pb-0 w-full pb-0 lg:justify-start">
          <img
            src="/src/assets/cart/image-speaker-zx9.webp"
            className="h-56 md:h-56 lg:min-h-[26rem]  w-full object-contain"
            alt=""
          />
        </div>
        <div className="h-full flex items-center justify-center w-full">
          <div className="flex flex-col items-start justify-center px-6 text-center space-y-8 w-full py-8 mx-auto lg:p-0 lg:max-w-md lg:w-full ">
            <h2 className="text-6xl font-bold text-white mb-4 lg:text-start text-center w-full mx-auto">
              ZX9 <br />
              Speaker
            </h2>
            <p className="text-white text-opacity-75 w-full text-lg mb-8 text-center lg:text-start">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <div className="w-full lg:w-fit flex items-start justify-start left-0">
              <button
                className="lg:text-start bg-primary-200 rounded-sm text-primary-300 mx-auto hover:bg-secondary-400 transition-colors duration-300 px-8 py-4
          text-xs uppercase tracking-widest font-bold"
              >
                See Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCardTwo;
