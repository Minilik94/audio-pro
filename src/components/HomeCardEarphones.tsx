import earphones from "../assets/home/mobile/image-earphones-yx1.jpg";
const HomeCardEarphones = () => {
  return (
    <div className="max-w-[69.375rem] mx-auto h-full shadow-none relative overflow-hidden font-manrope px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg gap-8 shadow-lg w-full">
        <div
          className="min-h-80 h-full w-full rounded-lg"
          style={{
            backgroundImage: `url(${earphones})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex  h-full justify-start items-center px-16 bg-primary-500 rounded-lg min-h-80">
          <div className="flex flex-col space-y-10">
            <h3 className="uppercase text-3xl max-w-64 mx-auto font-bold tracking-widest  ">
              YX1 Earphones
            </h3>
            <div className="">
              <button
                className="lg:text-start bg-transparent border border-primary-200 rounded-sm text-secondary-300 font-extrabold mx-auto transition-all duration-600 px-8 py-4
          text-xs uppercase tracking-widest  hover:bg-secondary-300 hover:text-secondary-200"
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
export default HomeCardEarphones;
