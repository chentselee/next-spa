import { Route, BrowserRouter, Routes } from "react-router-dom";
import dynamic from "next/dynamic";
const Home = dynamic(() => import("./Home"), { suspense: true });
const About = dynamic(() => import("./About"), { suspense: true });
import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<div>not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
