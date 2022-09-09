import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";

const Prerender: NextPageWithLayout = () => {
  return (
    <>
      <p>This page is prerendered by Next.js</p>
    </>
  );
};

Prerender.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Prerender;
