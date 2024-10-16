import HeroComponent from "../components/ProductHeroComponent";
import HomeCardDescription from "../components/HomeCardDescription";
import HomeCardsNav from "../components/HomeCardsNav";
import ProductListings from "../components/ProductListings";
import { useEffect, useState } from "react";
import { Product as ProductType } from "../shared/types";

const Earphones = () => {
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/?category=speakers`);
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
    <div className=" w-full mx-auto h-full shadow-none relative overflow-hidden font-manrope">
      <HeroComponent title={"Speakers"} />
      <ProductListings product={product} />
      <HomeCardsNav />
      <HomeCardDescription />
    </div>
  );
};
export default Earphones;
