import type { NextPage } from "next";
import { Button, Layout } from "../../components";

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <h1> Dashboard </h1>
        <Button text="Exit App" link="/"/>
    </Layout>
  );
};

export default Dashboard;
