import { Nav } from "./Nav";

/** Layout for next pages */
const Layout: React.FC<{ children?: React.ReactNode; withNav?: boolean }> = ({
  children,
  withNav = true,
}) => {
  return (
    <div className="xl:mx-auto max-w-screen-xl">
      {withNav && <Nav isFromNext />}
      {children}
    </div>
  );
};

export default Layout;
