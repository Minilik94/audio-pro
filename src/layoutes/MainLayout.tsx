import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar, Footer } from "../components/navigations/";
import { motion, AnimatePresence } from "framer-motion";

const MainLayout = () => {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, x: -200 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 200 },
  };

  const pageTransition = {
    type: "tween",
    ease: "easeIn",
    duration: 0.1,
  };

  return (
    <div className="p-0 m-0 ">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default MainLayout;
