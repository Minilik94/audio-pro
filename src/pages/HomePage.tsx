import "@fontsource/manrope";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCardsNav";
import HomeCardEarphones from "../components/HomeCardEarphones";
import HomeCardZX7 from "../components/HomeCardZX7";
import HomeCardZX9Speaker from "../components/HomeCardZX9";
import HomeCardDescription from "../components/HomeCardDescription";

const HomePage = () => {
  return (
    <>
      <div className="px-0 bg-secondary-300 lg:px-24 lg:py-4">
        <Hero />
      </div>

      {/* <div className="space-y-8"> */}
      <HomeCards />
      <HomeCardZX9Speaker />
      <HomeCardZX7 />
      <HomeCardEarphones />
      <HomeCardDescription />
      {/* </div> */}
    </>
  );
};
export default HomePage;
