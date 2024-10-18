import { useEffect, useState } from "react";
import { Product as ProductType } from "../shared/types";
import { NavLink } from "react-router-dom";
import { HomeCardsNav, HomeCardDescription } from "../components/home_page/";
import { ProductListings, ProductHero } from "../components/product_listing";

const Headphones = () => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/?category=headphones`);
        const data = await res.json();
        const sortedProducts = data.sort((a: ProductType, b: ProductType) => {
          if (a.new && !b.new) return -1;
          if (!a.new && b.new) return 1;
          return 0;
        });

        setProduct(sortedProducts);
      } catch (err) {
        console.log(err);
      }finally{
        setLoading(false)
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className=" w-full mx-auto h-full shadow-none relative overflow-hidden font-manrope space-y-20">
      <ProductHero title={"Headphones"} />
      <ProductListings product={product} loading={loading}/>
      <HomeCardsNav />
      <HomeCardDescription />
    </div>
  );
};
export default Headphones;
