import Layout from "../components/Layout";
import { ContentLayout } from "../components/ContentLayout";
import { NextPageWithLayout } from "./_app";

const Prerender: NextPageWithLayout = () => {
  return (
    <div className="prose">
      <h1>Prerender</h1>
      <p className="italic">This page is prerendered by Next.js.</p>
    </div>
  );
};

Prerender.getLayout = (page) => {
  return (
    <Layout>
      <ContentLayout>{page}</ContentLayout>
    </Layout>
  );
};

export default Prerender;
