import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="p-0 m-0 block mb-8">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default MainLayout;
