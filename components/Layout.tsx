import { Nav } from "./Nav";

/** Layout for next pages */
const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Nav isFromNext />
      {children}
    </>
  );
};

export default Layout;
