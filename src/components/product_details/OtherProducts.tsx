import { Other } from "../../shared/types";

const OtherProducts = ({others}: {others: Other[]}) => {
    console.log(others, 'related Product')
  return <div>OtherProducts</div>;
};
export default OtherProducts;
