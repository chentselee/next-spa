import dynamic from "next/dynamic";

const App = dynamic(() => import("../components/App"), { ssr: false });

const NextApp = () => {
  return <App />;
};

export default NextApp;
