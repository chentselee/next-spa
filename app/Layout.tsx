import { Outlet, useSearchParams, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { Nav } from "../components/Nav";

const RedirectFromNext = () => {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");
  return redirect ? <Navigate to={redirect} replace /> : null;
};

const Layout = () => {
  return (
    <>
      <RedirectFromNext />
      <Nav isFromNext={false} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
