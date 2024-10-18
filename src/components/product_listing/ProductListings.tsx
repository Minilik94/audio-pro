import { NavLink } from "react-router-dom";
import { Product as ProductType } from "../../shared/types";
import { useEffect, useState } from "react";

const ProductListings = (product: { product: ProductType | null }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-[72rem] mx-auto h-full shadow-none relative overflow-hidden font-manrope px-2 w-full">
      {product?.product && product.product.length > 0 ? (
        product?.product.map((product: ProductType, index: number) => (
          <div className="lg:my-20 mb-8" key={product.slug}>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full px-8 gap-24">
              <div
                className={`min-h-[34rem] h-full w-full rounded-lg ${
                  index % 2 !== 0 ? "lg:order-last" : ""
                }`}
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
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }),
                  // small screen
                  ...(windowWidth < 640 && {
                    backgroundImage: `url(/${product.image.mobile})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }),
                }}
              ></div>
              <div className="flex flex-col justify-center gap-9  py-2">
                <p
                  className={`${
                    product.new
                      ? "text-primary-100 uppercase text-pretty font-extralight tracking-[4.5px]"
                      : "hidden"
                  }`}
                >
                  New Product
                </p>
                <div className="text-4xl uppercase tracking-widest font-bold">
                  {product.name}
                </div>
                <div className="text-secondary-700 text-left tracking-widest">
                  {product.description}
                </div>

                <div className="">
                  <NavLink
                    to={`/product/${product.slug}`}
                    className="bg-primary-100 hover:bg-secondary-100 transition-colors duration-300 text-white px-8 py-4
        text-xs uppercase tracking-widest font-bold"
                  >
                    See Product
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No products found.</div>
      )}{" "}
    </div>
  );
};
export default ProductListings;
