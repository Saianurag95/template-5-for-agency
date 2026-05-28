import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import IntakePage from "./pages/IntakePage";
import ScrollReveal from "./components/ScrollReveal";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollReveal />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intake" element={<IntakePage />} />
      </Routes>
    </BrowserRouter>
  );
}
