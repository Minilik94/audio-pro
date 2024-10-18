import "@fontsource/manrope";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";
import {
  Hero,
  HomeCardsNav,
  HomeCardZX9Speaker,
  HomeCardZX7,
  HomeCardEarphones,
  HomeCardDescription,
} from "../components/home_page";

const HomePage = () => {
  return (
    <>
      <div className="px-0 bg-secondary-300 lg:px-24 lg:py-4">
        <Hero />
      </div>

      {/* <div className="space-y-8"> */}
      <HomeCardsNav />
      <HomeCardZX9Speaker />
      <HomeCardZX7 />
      <HomeCardEarphones />
      <HomeCardDescription />
      {/* </div> */}
    </>
  );
};
export default HomePage;
