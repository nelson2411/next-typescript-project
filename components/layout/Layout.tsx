import React, { Children } from "react";
import NavigationBar from "../navbar/Navbar";
import Footer from "../footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
