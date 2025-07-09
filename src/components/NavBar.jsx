import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  useEffect(() => {
    // Remove overflow-hidden class when component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
   <nav className="w-full bg-gray-800 text-white">
  <div className="max-w-8xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
    {/* Avatar */}
    <Link to="/" className="bg-white rounded-full p-1 flex items-center justify-center h-14 w-14">
      <img
        src={avatar}
        alt="Profile"
        className="h-full w-full rounded-full object-cover"
      />
    </Link>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      {!isMobileMenuOpen && (
        <button
          onClick={toggleMobileMenu}
          className="text-gray-200 hover:text-white focus:outline-none"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center space-x-6">
      <Link to="/about" className="hover:text-gray-300" onClick={closeMobileMenu}>
        About
      </Link>
      <Link to="/contact" className="hover:text-gray-300" onClick={closeMobileMenu}>
        Contact
      </Link>
      <Link to="/projects" className="hover:text-gray-300" onClick={closeMobileMenu}>
        Projects
      </Link>
    </div>
  </div>

  {/* Mobile Menu Overlay */}
  {isMobileMenuOpen && (
    <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-50">
      <div className="flex justify-end pt-4 pr-4">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-400 hover:text-white focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        <Link to="/about" className="text-xl hover:text-gray-300" onClick={closeMobileMenu}>
          About
        </Link>
        <Link to="/contact" className="text-xl hover:text-gray-300" onClick={closeMobileMenu}>
          Contact
        </Link>
        <Link to="/projects" className="text-xl hover:text-gray-300" onClick={closeMobileMenu}>
          Projects
        </Link>
      </div>
    </div>
  )}
</nav>

  );
};

export default NavBar;
