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
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-gray-800 text-white">
      <div className="flex items-center">
        <div className="mr-4 bg-white rounded-full p-2">
          <Link to="/">
            <img src={avatar} alt="Profile" className="h-12 w-12" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {!isMobileMenuOpen && (
          <button
            onClick={toggleMobileMenu}
            className="block text-gray-200 hover:text-white focus:text-white focus:outline-none"
          >
            <svg
              className="h-9 w-9" // Increasing the height and width to make the icon larger
              fill="none"
              viewBox="0 0 24 24" // Adjusted viewBox to include more space
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3} // Increased stroke width for more spacing between bars
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          to="/about"
          className="hover:text-gray-300 hover:underline"
          onClick={closeMobileMenu}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-gray-300 hover:underline"
          onClick={closeMobileMenu}
        >
          Contact
        </Link>
        <Link
          to="/projects"
          className="hover:text-gray-300 hover:underline"
          onClick={closeMobileMenu}
        >
          Projects
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-50">
          <div className="flex justify-end pt-4 pr-4">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-white focus:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <Link
              to="/about"
              className="text-xl font-semibold my-4 hover:text-gray-300"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-xl font-semibold my-4 hover:text-gray-300"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <Link
              to="/projects"
              className="text-xl font-semibold my-4 hover:text-gray-300"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
