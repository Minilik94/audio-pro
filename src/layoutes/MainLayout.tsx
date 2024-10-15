import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="p-0 m-0 block">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};
export default MainLayout;
