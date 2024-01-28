import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//outlet says that footer and header should always be on the page
function Layout() {
  return (
    <>
      <Header />
      
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
