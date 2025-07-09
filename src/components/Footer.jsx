import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-4 sm:py-6 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* Centered text */}
        <p className="text-sm text-center order-2 sm:order-1 sm:w-1/3">
          &copy; {new Date().getFullYear()} JakeHill
        </p>

        {/* Empty spacer to help center text */}
        <div className="hidden sm:block sm:w-1/3"></div>

        {/* Right-aligned social links with icons */}
        <div className="flex items-center space-x-4 order-1 sm:order-2 sm:w-1/3 justify-end">
          <a
            target="_blank"
            href="https://github.com/jacob-hill90"
            className="footer-link bg-white mb-2 text-black px-4 py-1 rounded inline-flex items-center space-x-2"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
          <span className="text-gray-400 mb-2">|</span>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jacob-hill90/"
            className="footer-link bg-white mb-2 text-black px-4 py-1 rounded inline-flex items-center space-x-2"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
