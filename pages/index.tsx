import dynamic from "next/dynamic";

const App = dynamic(() => import("../app/App"), { ssr: false });

const NextApp = () => {
  return <App />;
};

export default NextApp;
