import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div className="site-layout">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <NavBar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/projects/" element={<Projects />} />
          <Route path="/projects/:slug/" element={<ProjectDetail />} />
          <Route path="/contact/" element={<Contact />} />
          <Route
            path="*"
            element={
              <section className="shell page-hero">
                <h1>Page not found.</h1>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
