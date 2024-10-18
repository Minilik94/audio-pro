import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Product as ProductType } from "../shared/types";
import { Minus, Plus } from "lucide-react";
import {
  ProductGallary,
  ProductFeatures,
  OtherProducts,
} from "../components/product_details";
import { HomeCardsNav } from "../components/home_page";

const Product = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null); // Start with null
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cartTotal, setCartTotoal] = useState(1);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/?slug=${slug}`);
        const data = await res.json();
        console.log(data, "res");
        setProduct(data[0]); // Update the product state with fetched data
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [slug]); // Add slug as a dependency

  // Handle case where product is still being fetched
  if (!product) {
    return <div>Loading...</div>;
  }


  return (
    <div className="max-w-[72rem] mx-auto h-full shadow-none relative overflow-hidden font-manrope px-2 w-full my-9 ">
      <div className="md:space-y-16 lg:space-y-16 space-y-4">
        <NavLink
          to={"/"}
          className={
            "hover:text-primary-100 font-bold cursor-pointer px-10 md:px-16 lg:px-8 "
          }
        >
          Go back
        </NavLink>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full px-8 gap-8 ">
          <div
            className="min-h-[38rem] h-full w-full rounded-lg p-12"
            style={{
              ...(windowWidth >= 1024 && {
                backgroundImage: `url(/${product.image.desktop})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center ",
                backgroundSize: "cover",
              }),
              ...(windowWidth < 1024 && {
                backgroundImage: `url(/${product.image.tablet})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }),
              // small screen
              ...(windowWidth < 640 && {
                backgroundImage: `url(/${product.image.mobile})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }),
            }}
          ></div>
          <div className="flex flex-col justify-center lg:px-24 space-y-6  w-full">
            <p
              className={`${
                product.new
                  ? "text-primary-100 uppercase text-pretty text-xl font-extralight tracking-[4.5px]"
                  : "hidden"
              }`}
            >
              New Product
            </p>
            <div className="text-4xl uppercase tracking-widest font-bold">
              {product.name}
            </div>
            <div className="text-secondary-700 tracking-wide">
              {product.description}
            </div>

            <div className="font-bold tracking-widest text-lg">
              <span className="mr-1">$</span>
              {product.price.toLocaleString()}
            </div>
            <div className="flex items-center md:justify-start lg:justify-start md:gap-4 lg:gap-6 justify-between w-full">
              <div className="flex items-center w-fit bg-primary-300">
                <button className="p-5 hover:scale-90 transition-all duration-300 hover:text-primary-100">
                  <Minus
                    className="w-4 h-4 text-xs"
                    onClick={() => {
                      setCartTotoal((prev) => (prev === 1 ? 1 : prev - 1));
                    }}
                  />
                </button>
                <div className=" font-bold">{cartTotal}</div>
                <button
                  className="p-5 hover:scale-90 transition-all duration-300 hover:text-primary-100"
                  onClick={() => {
                    setCartTotoal(() => cartTotal + 1);
                  }}
                >
                  <Plus className="w-4 h-4 text-xs" />
                </button>
              </div>
              <button className="bg-primary-100 hover:bg-secondary-100 transition-colors text-[12px] duration-300 text-white px-4 py-4 uppercase">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-32">
          <ProductFeatures
            productFeatures={product.features}
            productIncludes={product.includes}
          />
          <ProductGallary gallery={product.gallery} />
          <OtherProducts others={product.others} />
          <HomeCardsNav />
        </div>
      </div>
    </div>
  );
};

export default Product;
