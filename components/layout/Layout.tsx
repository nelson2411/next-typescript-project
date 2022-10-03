import React, { Children } from "react";
import NavigationBar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import styles from "../../styles/Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
