import heroPersonImg from "../assets/man-headerphone.webp";

const HomeCardDescription = () => {
  return (
    <div className="max-w-[69.375rem] mx-auto h-full shadow-none relative overflow-hidden font-manrope px-2 my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg gap-8 shadow-lg w-full">
        <div
          className="min-h-80 h-full w-full rounded-lg md:order-2 lg:order-2"
          style={{
            backgroundImage: `url(${heroPersonImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex  h-full justify-center px-16 bg-transparent rounded-lg min-h-80 md:order-1 md:justify-start lg:px-8">
          <div className="flex md:text-start flex-col space-y-6 text-center items-center justify-center py-6">
            <h3 className="uppercase text-4xl text-center md:text-start mx-auto font-bold tracking-wide leading-tight lg:text-5xl">
              Bringing you the <span className="text-primary-100">best</span>{" "}
              audio gear
            </h3>
            <p className="text-secondary-700">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeCardDescription;
