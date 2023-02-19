import React from "react";
import Gmail from "../assests/projects/Gmail.png";
import Linkedin from "../assests/projects/Linkedin.png";

const Work = () => {
  return (
    // name-for react smooth scroll
    <div name="work" className="w-full sm:h-screen text-gray-300 bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4  flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">//Checkout some of my recent work</p>
        </div>

        {/* Projects/grid container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* Card item container */}
          <div
            style={{ backgroundImage: `url(${Linkedin})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://linkedin-clone-yt-79b17.web.app/" target="_blank" >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="https://github.com/vibha-2601/Linkedin-clone" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg">
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Card item container */}
          <div
            style={{ backgroundImage: `url(${Gmail})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://clone-2bedd.web.app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="https://github.com/vibha-2601/gmail-clone" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg">
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
