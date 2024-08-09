import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-4 sm:py-6 sm:px-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Jake Hill
        </p>
        <div className="flex">
          <a
            target="_blank"
            href="https://github.com/jacob-hill90"
            className="footer-link"
          >
            GitHub
          </a>
          <span className="text-gray-400 mx-2 text-2xl">|</span>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jacob-hill90/"
            className="footer-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
