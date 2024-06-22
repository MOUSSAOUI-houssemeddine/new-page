import React from "react";
import { FaFile } from "react-icons/fa";
const MyResults = () => {
  return (
    <div>
      <header className="flex bg-darkGreen1 h-full w-full text-white  py-4 ">
        <button> --- MyResults</button>
      </header>
      <div className="flex flex-col  ml-4 mt-4 bg-white p-6   w-full">
        <div className="flex text-gray-600 text-3xl ">
          14 DEC 2024
          <button className="text-darkGreen3">
            {" "}
            <FaFile />
          </button>
        </div>
        <div className="text-darkGreen2 ml-8 ">___________</div>

        <div className="flex text-gray-600 text-3xl">
          20 DEC 2024
          <button className="text-darkGreen3">
            {" "}
            <FaFile />
          </button>
        </div>
        <div className="text-darkGreen2 ml-8">___________</div>

        <div className="flex text-gray-600 text-3xl">
          28 DEC 2024
          <button className="text-darkGreen3">
            {" "}
            <FaFile />
          </button>
        </div>
        <div className="text-darkGreen2 ml-8">___________</div>
      </div>
    </div>
  );
};

export default MyResults;
