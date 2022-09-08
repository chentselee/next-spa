import { Nav } from "../components/Nav";

const Prerender = () => {
  return (
    <>
      <Nav isFromNext />
      <p>This page is prerendered by Next.js</p>
    </>
  );
};

export default Prerender;
