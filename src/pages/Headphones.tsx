import { useEffect, useState } from "react";
import HeroComponent from "../components/ProductHeroComponent";
import HomeCardDescription from "../components/HomeCardDescription";
import HomeCardsNav from "../components/HomeCardsNav";
import { Product as ProductType } from "../shared/types";
import { NavLink } from "react-router-dom";
import ProductListings from "../components/ProductListings";

const Headphones = () => {
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/?category=headphones`);
        const data = await res.json();
        console.log(data, "res headphones");
        const sortedProducts = data.sort((a: ProductType, b: ProductType) => {
          if (a.new && !b.new) return -1;
          if (!a.new && b.new) return 1;
          return 0;
        });

        setProduct(sortedProducts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" w-full mx-auto h-full shadow-none relative overflow-hidden font-manrope space-y-20">
      <HeroComponent title={"Headphones"} />
      <ProductListings product={product} />
      <HomeCardsNav />
      <HomeCardDescription />
    </div>
  );
};
export default Headphones;
