import { News, Products, About } from "../sections";
import { Route, Routes } from "react-router";

export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<News />} key={0} />
      <Route path="/news" element={<News />} key={1} />
      <Route path="/products" element={<Products />} key={2} />
      <Route path="/about" element={<About />} key={3} />
    </Routes>
  );
}
