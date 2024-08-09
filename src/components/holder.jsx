function Holder() {
  const scrollDown = () => {
    const secondContent = document.querySelector(".second-content");
    if (secondContent) {
      secondContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative md:h-[90vh] flex justify-center items-start bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
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
              <p className="text-base md:text-lg">
                With a passion for development that runs deep, I bring a wealth
                of experience and expertise to the table. My proficiency spans
                across various programming languages and frameworks, coupled
                with a keen eye for detail and a knack for problem-solving. I
                thrive in dynamic environments, collaborating seamlessly with
                teams to deliver innovative solutions that exceed expectations.
                Hiring me means gaining a dedicated and adaptable software
                developer who is committed to driving excellence and pushing
                boundaries in every project!
              </p>
            </div>
            <div className="job-info-container w-[full] md:w-2/6 border flex flex-col items-left border-gray-300 rounded-lg mt-8 md:mt-0 md:ml-8 p-8">
              <h2 className="text-2xl text-center font-semibold mb-4">
                History
              </h2>
              <div className="mb-4">
                <h3 className="text-lg font-semibold underline">
                  <a target="_blank" href="https://robotire.com/">
                    Robotire
                  </a>
                </h3>
                <p className="text-base">Position: Frontend Developer</p>
                <p className="text-base">
                  Duration: October 2022 - December 2023
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold underline">
                  <a target="_blank" href="https://www.codeplatoon.org/">
                    Code Platoon
                  </a>
                </h3>
                <p className="text-base">
                  Position: Full Stack Engineering Student
                </p>
                <p className="text-base">
                  Duration: April 2022 - September 2022
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold underline">
                  <a target="_blank" href="https://www.annarborymca.org/">
                    Ann Arbor YMCA
                  </a>
                </h3>
                <p className="text-base">
                  Position: Membership Service Representative
                </p>
                <p className="text-base">Duration: March 2020 - April 2022</p>
              </div>
              <a
                href={rezzy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-blue-500 underline"
              >
                View Resume (PDF)
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
      <div className="absolute z-20 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        <div className="bg-white  shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Card 1</h2>
          <p className="text-gray-700">Content for card 1 goes here.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Card 2</h2>
          <p className="text-gray-700">Content for card 2 goes here.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Card 3</h2>
          <p className="text-gray-700">Content for card 3 goes here.</p>
        </div>
      </div>
      <div className="container mx-auto flex flex-col justify-center items-center h-full">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Want to work together?
        </h2>

        <Link to="/contact" className="btn-primary">
          <button className="rounded-full bg-blue-200 px-5 py-2 hover:bg-blue-400">
            Contact Me
          </button>
        </Link>
      </div>
    </>
  );
}

export default Holder;
