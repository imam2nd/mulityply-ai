import React from "react";
import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <>{children}</>
      <Footer />
    </>
  );
};

export default Layout;
