import type { NextPage } from "next";
import TableContent from "../components/table/Table";
import Layout from "../components/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <TableContent />
    </Layout>
  );
};

export default Home;
