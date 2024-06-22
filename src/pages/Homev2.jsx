import React from "react";
import logo from "../assets/images/logo.png";
import { CiPlay1 } from "react-icons/ci";
import doc from "../assets/images/doc.png";

const Homev2 = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-start py-12 px-4 md:px-[88px]">
      <header className="w-full flex justify-between items-center p-4 bg-blue-50 px-4 md:px-[58px]">
        <div className="flex items-center ">
          <img src={logo} alt="Alpha Hospital Logo" className="h-10 mr-2" />
        </div>
        <nav>
          <ul className="topLeft flex gap-4 md:gap-[40px] items-center">
            <li>
              <a href="#" className="hover:text-teal-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600">
                Pharmacy
              </a>
            </li>
            <button className="bg-darkGreen4 text-white py-2 md:py-4 px-4 md:px-10 rounded-full">
              Log In
            </button>
          </ul>
        </nav>
      </header>

      <div className="main px-4 md:px-[68px] bg-blue-50 min-h-screen flex flex-col">
        <div className="top flex flex-col md:flex-row justify-between">
          <div className="writes text-start flex flex-col items-start">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 my-7">
              A heritage in Care.
              <br />
              A reputation in
              <br />
              excellence.
            </h1>
            <p className="mt-4 text-gray-800 text-start">
              Alpha Hospital provides excellent service by prioritizing
              <br />
              the safety and security of patients.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-16">
          <button className="bg-darkGreen4 text-white py-4 px-4 rounded-full">
            Registration
          </button>
          <button className="flex items-center space-x-2 rounded-full">
            <span className="bg-white py-4 px-4 rounded-full shadow">
              <CiPlay1 />
            </span>
            <span>Watch Video</span>
          </button>
        </div>
        {/* top end */}
        <div className="flex ml-0 md:ml-44 mt-16">Book an appointment</div>
        <div className="bg-white ml-0 md:ml-32 py-4 px-6 md:px-20 rounded-2xl shadow-2xl mt-10">
          <div className="flex flex-col md:flex-row items-center mr-4 space-y-4 md:space-y-0 md:space-x-10">
            <div className="flex flex-col">
              <label className="text-sm font-medium">
                Date
                <select />
              </label>
              <option className="mt-2">Wed, Feb 14, 2022</option>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium">
                Location
                <select />
              </label>
              <option className="mt-2">Setif City Boussekin</option>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium">
                Service
                <select />
              </label>
              <option className="mt-2">Psychology</option>
            </div>

            <button className="bg-darkGreen4 text-white py-4 px-4 rounded-full">
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homev2;
