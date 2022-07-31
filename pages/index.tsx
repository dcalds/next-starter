import type { NextPage } from "next";

// import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";

import { Button, Layout } from "../components";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1> Login </h1>
        <Button text="Go to Dashboard" link="/dashboard" />
    </Layout>
  );
};

export default Home;
