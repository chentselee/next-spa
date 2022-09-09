import { Nav } from "./Nav";
import Head from "next/head";

/** Layout for next pages */
const Layout: React.FC<{ children?: React.ReactNode; withNav?: boolean }> = ({
  children,
  withNav = true,
}) => {
  return (
    <>
      <Head>
        <title>Next.js SPA ♨</title>
        <meta
          name="description"
          content="A static-exported Next.js app with react-router-dom"
        />
      </Head>
      <div className="xl:mx-auto max-w-screen-xl">
        {withNav && <Nav isFromNext />}
        {children}
      </div>
    </>
  );
};

export default Layout;
