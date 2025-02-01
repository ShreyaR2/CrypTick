import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from "./ScrollToTop";
import {Outlet} from "react-router-dom"

const Layout = () => {


  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop/>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;


