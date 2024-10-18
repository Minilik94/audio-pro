import { Include as IncludeType } from "../../shared/types";

const ProductFeatures = ({
  productFeatures,
  productIncludes,
}: {
  productFeatures: string;
  productIncludes: IncludeType[];
}) => {
  const featuresInfo = productFeatures.split("\n\n");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full px-8 gap-12 font-manrope">
      <div className="space-y-8">
        <h3 className="text-3xl md:text-3xl lg:text-3xl font-bold font-manrope tracking-wider uppercase">
          Features
        </h3>
        {featuresInfo.length > 0 &&
          featuresInfo.map((feature, index) => (
            <p
              key={index}
              className="tracking-wider text-secondary-700 text-[14px] leading-6"
            >
              {feature}
            </p>
          ))}
      </div>
      <div className="space-y-8 flex flex-col items-start md:items-start lg:items-center">
        <h3 className="text-3xl md:text-3xl lg:text-3xl font-bold font-manrope tracking-wider uppercase">
          In the box
        </h3>
        <ul className="space-y-2">
          {productIncludes.length > 0 &&
            productIncludes.map((includes, index) => (
              <li key={index} className="text-lg">
                <span className="text-primary-100 text-sm font-bold pr-6">
                  {includes.quantity}x
                </span>
                <span className=" pl-8 text-sm text-secondary-700">
                  {includes.item}
                </span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default ProductFeatures;
