import type { NextPage } from "next";
import Head from "next/head";
import { InvestinView } from "../views";
import "antd/dist/antd.css";

const Investin: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Investin</title>
        <meta name='description' content='Investin' />
      </Head>
      <InvestinView />
    </div>
  );
};

export default Investin;
