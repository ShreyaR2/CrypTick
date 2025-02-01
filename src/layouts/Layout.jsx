import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";

// Layout Component
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;


