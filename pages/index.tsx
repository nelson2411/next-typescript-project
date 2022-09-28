import type { NextPage } from "next";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TableContent from "../components/table/Table";
import NavigationBar from "../components/navbar/Navbar";

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <NavigationBar />
      <TableContent />
    </Provider>
  );
};

export default Home;
