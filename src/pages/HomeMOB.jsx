import React from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { MdLocalPharmacy } from "react-icons/md";
import { GiNurseFemale } from "react-icons/gi";
import scr from "../assets/images/scr.png";
import Slider from "react-slick";
const HomeMOB = () => {

  return (


    <div className="bg-blue-50  min-h-screen flex flex-col items-start px-6">
      <header className="w-full flex justify-between items-center p-4 bg-darkGreen4 mt-4 rounded-20">
        <div className="flex items-center ">
          <CgProfile className="bg-blue-50 rounded-full w-6 h-6 mr-2 text-darkGreen3" />{" "}
          Dr.Bessou
        </div>
        
        <div className="flex  items-center rounded-full bg-white ml-4 ">
          <input
            type="search"
            className="p-2 rounded-full w-full"
            placeholder="Search..."
            
          />
          <FaSearch className="text-darkGreen3 w-10 h-6" />
        
        </div>
        <button className=""><IoIosNotifications className="bg-blue-50 rounded-full w-10 h-8 ml-2 text-darkGreen3" /></button>
      </header>

      <div className="w-full top flex flex-col  justify-between my-4">
        <div className="writes text-start flex flex-col items-start">
          <h1 className="text-4xl  font-bold text-gray-800 ">
            A heritage in Care.
            <br />
            A reputation in
            <br />
            excellence.
          </h1>
          <p className="mt-4 text-gray-800 text-start">
            MediCare provides excellent service by prioritizing
            <br />
            the safety and security of patients.
          </p>
        </div>
      </div>

      

      <div className="w-full flex flex-col space-y-4 ">
        <div className="w-full flex justify-between items-center mt-4 ">
          <div className="text-[22px]">Categories</div>
          <button className="text-darkGreen4 font-bold ml-36">View All</button>
        </div>

        <div className="flex justify-between  ">
          <div className="flex justify-between ">
            <button className="flex flex-col items-center justify-center rounded-20 bg-white h-20 w-20 border border-darkGreen2 shodow shadow-xl ">
              <GiNurseFemale className="text-darkGreen3 text-center h-6 w-6" />
              <div className="text-darkGreen2 font-bold">Nurse</div>
            </button>
          </div>

          <div className="flex justify-between ">
            <button className="flex flex-col items-center justify-center rounded-20 bg-white h-20 w-20 border border-darkGreen2 shodow shadow-xl">
              <FaUserDoctor className="text-darkGreen3 text-center h-6 w-6" />
              <div className="text-darkGreen2 font-bold">Doctor</div>
            </button>
          </div>

          <div className="flex justify-between ">
            <button className="flex flex-col items-center justify-center rounded-20 bg-white h-20 w-20 border border-darkGreen2 shodow shadow-xl">
              <MdLocalPharmacy className="text-darkGreen3 text-center h-6 w-6" />
              <div className="text-darkGreen2 font-bold">Pharmacy</div>
            </button>
          </div>
        </div>
        
        <div className=" w-full flex flex-col justify-between  ">
          <div className="flex flex-col space-y-4 ">
            <div className="w-full flex justify-between items-center mt-4 ">
              <div className="text-[22px]">Doctors</div>
              <button className="text-darkGreen4 font-bold ml-36">
                View All
              </button>
            </div>
          </div>

          <div className="w-full flex flex-col justify-between gap-4 mt-4 ">
            <div className="flex flex-col justify-between ">
              <button className="flex  items-center justify-center rounded-20 bg-white h-20 w-full shodow shadow-xl ">
                <img src={scr} alt="" className="h-16 rounded mr-4 " />
                <div className="flex flex-col">
                  <div className="text-darkGreen2 font-bold">Houssam</div>
                  <div className="flex text-gray-500">Cardiolog</div>
                </div>
              </button>
            </div>

            <div className="flex flex-col justify-between ">
              <button className="flex  items-center justify-center rounded-20 bg-white h-20 w-full shodow shadow-xl ">
                <img src={scr} alt="" className="h-16 rounded mr-4 " />
                <div className="flex flex-col">
                  <div className="text-darkGreen2 font-bold">Raouf</div>
                  <div className="flex text-gray-500">Cardiolog</div>
                </div>
              </button>
            </div>

            <div className="flex flex-col justify-between ">
              <button className="flex  items-center justify-center rounded-20 bg-white h-20 w-full shodow shadow-xl ">
                <img src={scr} alt="" className="h-16 rounded mr-4 " />
                <div className="flex flex-col">
                  <div className="text-darkGreen2 font-bold">Chiheb</div>
                  <div className="flex text-gray-500">Cardiolog</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMOB;
