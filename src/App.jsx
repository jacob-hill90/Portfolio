import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
