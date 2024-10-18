import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components/navigations/";

const MainLayout = () => {
  return (
    <div className="p-0 m-0 block">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default MainLayout;
