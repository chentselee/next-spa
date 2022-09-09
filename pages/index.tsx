import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";

const App = dynamic(() => import("../app/App"), { ssr: false });

const NextApp: NextPageWithLayout = () => {
  return <App />;
};

NextApp.getLayout = (page) => {
  return <Layout withNav={false}>{page}</Layout>;
};

export default NextApp;
