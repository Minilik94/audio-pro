import HeroComponent from "../components/HeroComponent";
import Product from "./Product";

const Earphones = () => {
  return (
    <div className=" w-full mx-auto h-full shadow-none relative overflow-hidden font-manrope">
      <HeroComponent title={"Earphones"} />

      <div>
        <Product />
      </div>
    </div>
  );
};
export default Earphones;
