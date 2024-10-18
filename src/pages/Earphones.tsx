import { HomeCardsNav, HomeCardDescription } from "../components/home_page/";
import { ProductListings, ProductHero } from "../components/product_listing";
import { useEffect, useState } from "react";
import { Product as ProductType } from "../shared/types";

const Earphones = () => {
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/?category=earphones`);
        const data = await res.json();
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
      <ProductHero title={"Earphones"} />
      <ProductListings product={product} />
      <HomeCardsNav />
      <HomeCardDescription />
    </div>
  );
};
export default Earphones;
