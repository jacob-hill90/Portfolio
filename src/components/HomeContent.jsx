import rezzy from "../assets/rezzy.pdf";
import { Link } from "react-router-dom";
import p1 from "../assets/fish.png";
import p2 from "../assets/ch.png";
import p3 from "../assets/tg.png";

function HomeContent() {
  const scrollDown = () => {
    const secondContent = document.querySelector(".second-content");
    if (secondContent) {
      secondContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative md:h-[90vh] flex justify-center items-start">
        <svg
          viewBox="0 -4 1920 269"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hill-svg absolute bottom-0 left-0 w-full z-0"
        >
          <path
            d="M253 13C132.2 -56.6 66.8333 179.167 0 269H1920V36.0002C1827 155.5 1536.5 197 1292.5 86.5001C1098.43 -1.3879 1050.5 86.5001 766.5 152.5C455.5 219.5 373.8 82.6 253 13Z"
            fill="#eedfc9"
          />
        </svg>
        <div className="container mx-auto px-4 md:px-8 z-10">
          <div className="intro-container md:flex justify-between items-center py-8 md:py-16">
            <div className="about-wrapper w-full md:w-3/6">
              <h3 className="text-lg md:text-xl font-light mb-4">
                Hello! My name is
              </h3>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Jake Hill</h2>
              <p className="text-base md:text-lg mb-4">
                I'm a software developer and digital designer with over 1 year
                of experience creating websites and applications.
              </p>
              <p className="text-base md:text-lg mb-4">
                Guided by an authentic passion for software development, I bring
                a wealth of experience and expertise to the table. My
                proficiency spans across various programming languages and
                frameworks, coupled with a keen eye for detail and a knack for
                problem-solving. I thrive in dynamic environments, collaborating
                seamlessly with others to deliver innovative solutions that
                exceed expectations.
              </p>
              <p className="text-base md:text-lg">
                Hiring me means gaining a dedicated and adaptable software
                engineer who is committed to driving excellence and pushing
                boundaries in every project!
              </p>
            </div>
            <div className="job-info-container w-[full] md:w-2/6 border flex flex-col items-left border-gray-300 rounded-lg mb-8 sm:mb-0 mt-8 md:mt-0 md:ml-8 p-8 ">
              <h2 className="text-2xl text-center font-semibold mb-4">
                Experience
              </h2>
              <div className="mb-2">
                <h3 className="text-lg font-semibold underline">
                  <a target="_blank" href="https://robotire.com/">
                    Robotire
                  </a>
                </h3>
                <p className="text-base"> Frontend Developer</p>
                <p className="text-base"> October 2022 - December 2023</p>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full mb-2"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full mb-2"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full mb-2"></div>
              <div className="mb-2">
                <h3 className="text-lg font-semibold underline">
                  <a target="_blank" href="https://www.codeplatoon.org/">
                    Code Platoon
                  </a>
                </h3>
                <p className="text-base">Full Stack Engineering Student</p>
                <p className="text-base"> April 2022 - September 2022</p>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full mb-2"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full mb-2"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full mb-2"></div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold underline">
                  <a target="_blank" href="https://www.annarborymca.org/">
                    Ann Arbor YMCA
                  </a>
                </h3>
                <p className="text-base">Membership Service Representative</p>
                <p className="text-base"> March 2020 - April 2022</p>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full mb-2"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full mb-2"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full mb-2"></div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold underline">
                  <a target="_blank" href="https://www.annarborymca.org/">
                    United States Marine Corps
                  </a>
                </h3>
                <p className="text-base">Maween</p>
                <p className="text-base"> October 2011 - July 2016</p>
              </div>
              <a
                href={rezzy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-blue-500 underline"
              >
                Resume (PDF)
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute z-10 cursor-pointer bottom-[-4rem] md:bottom-0"
          onClick={scrollDown}
        >
          <h1 className="p-3 text-xl md:text-2xl font-bold">Projects</h1>
          <div className="flex justify-center items-center">
            <div className="animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="second-content h-[150vh] sm:h-screen relative">
        <div className="bg-[#eedfc9] z-0 h-full flex justify-center items-center">
          <div className="absolute z-20 container-fluid px-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white shadow-md rounded-lg p-6 overflow-hidden transition-transform transform sm:hover:scale-105">
              <div className="mb-4">
                {/* Photo Section */}
                <img src={p1} alt="Project 1" className="w-full h-auto" />
              </div>
              <div>
                {/* Text Section */}
                <h2 className="text-xl font-semibold mb-2">Fishtories</h2>
                <p className="text-gray-700">Content for card 1 goes here.</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 overflow-hidden transition-transform transform sm:hover:scale-105">
              <div className="mb-4">
                {/* Photo Section */}
                <img src={p2} alt="Project 2" className="w-full h-auto" />
              </div>
              <div>
                {/* Text Section */}
                <h2 className="text-xl font-semibold mb-2">Comfort Homes</h2>
                <p className="text-gray-700">Content for card 2 goes here.</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 overflow-hidden transition-transform transform sm:hover:scale-105">
              <div className="mb-4">
                {/* Photo Section */}
                <img src={p3} alt="Project 3" className="w-full h-auto" />
              </div>
              <div>
                {/* Text Section */}
                <h2 className="text-xl font-semibold mb-2">Annual Tailgate</h2>
                <p className="text-gray-700">Content for card 3 goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[30rem] sm:h-[50rem] relative">
        <svg
          viewBox="0 -2 1920 270"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hill-svg absolute top-0 left-0 w-full z-0 transform rotate-180"
        >
          <path
            d="M253 13C132.2 -56.6 66.8333 179.167 0 269H1920V36.0002C1827 155.5 1536.5 197 1292.5 86.5001C1098.43 -1.3879 1050.5 86.5001 766.5 152.5C455.5 219.5 373.8 82.6 253 13Z"
            fill="#eedfc9"
          />
        </svg>
        <div className="container mx-auto flex flex-col justify-center items-center sm:h-full">
          <h2 className="text-2xl md:text-5xl mt-[10rem] font-bold text-center mb-4">
            Lets build something great!
          </h2>

          <Link to="/contact" className="btn-primary">
            <button className="rounded-full bg-blue-200 px-5 py-2 hover:bg-blue-400">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomeContent;
