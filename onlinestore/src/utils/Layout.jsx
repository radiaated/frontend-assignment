import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container w-[90%] mx-auto my-8">
        <Outlet />
      </div>
      Footer
    </>
  );
};

export default Layout;
