import { Route, BrowserRouter, Routes } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
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
