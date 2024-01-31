import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import SideBar from "../SideBar";
const DashboardLayout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <div
        className="lg:ml-64 bg-gray-800"
        style={{
          minHeight: "calc(100vh - 30px)",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
