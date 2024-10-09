import "@fontsource/manrope";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import HomeCardTwo from "../components/HomeCardTwo";

const HomePage = () => {
  return (
    <>
      <div className="px-0 bg-secondary-300 lg:px-24 lg:py-4">
        <Hero />
      </div>

      {/* <div className="space-y-8"> */}
        <HomeCards />
        <HomeCardTwo/>
      {/* </div> */}
    </>
  );
};
export default HomePage;
