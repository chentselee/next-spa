import { Outlet, useSearchParams, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { Nav } from "../components/Nav";
import { ContentLayout } from "../components/ContentLayout";

const RedirectFromNext = () => {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");
  return redirect ? <Navigate to={redirect} replace /> : null;
};

/** Layout for react-router-dom */
const Layout = () => {
  return (
    <>
      <RedirectFromNext />
      <Nav isFromNext={false} />
      <ContentLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </ContentLayout>
    </>
  );
};

export default Layout;
