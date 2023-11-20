import Search from "../components/Search";
import Cuisine from "./Cuisine";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
const Pages = () => {
  return (
    <div>
      <Home />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Search />} />
      </Routes>
    </div>
  );
};
export default Pages;
