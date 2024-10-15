import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layoutes/MainLayout";
import Earphones from "./pages/Earphones";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Product from "./pages/Product";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
