import React from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaFile } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";

const BarSlide = () => {
  return (
    <div className=" bg-darkGreen3 flex flex-col w-60 min-h-screen">
      <div className="flex  justify-center items-center mt-4">
        <div>
        <p className="font-bold text-white">rafikzem<br/>+21398772236</p>
        </div>
        
      </div>
      <div className="text-white ml-4">___________________________</div>
      <div className="flex flex-col justify-center ml-4 mt-4 left-2">
        <button className=" text-white mt-4 flex items-center gap-4 left-2">
          <FaListAlt className="text-white" />
          Mes demandes
        </button>
        <button className=" text-white mt-4 flex items-center gap-4 left-2">
          <FaFile className="text-white" />
          Mes resultas
        </button>
        <button className=" text-white  mt-4 flex items-center gap-4 left-2">
          <FaRegCircleQuestion className="text-white" />
          Assistance
        </button>
        <button className=" text-white  mt-4 flex items-center gap-4 left-2">
          <FaPeopleGroup className="text-white" />
          Qui somme nous? 
        </button>
        <button className=" text-white  mt-4 flex items-center gap-4 left-2">
          <IoSettingsOutline className="text-white" />
          Parametre
        </button>
      </div>

      <div className="text-white ml-4">___________________________</div>

      <div className="text-white ml-2 mt-4 text-start font-bold ">Version</div>
    
    </div>
  );
};

export default BarSlide;
