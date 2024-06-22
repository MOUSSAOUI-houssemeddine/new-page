import React, { useRef } from "react";
import { IoMdLogOut } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";



const NurseTopBar = ({ type }) => {
  const switchButton = useRef(null);

  // Function to switch the state of the switchButton
  const switchState = () => { 
    switchButton.current.classList.toggle("active");
        if (switchButton.current.classList.contains("active")) {
      console.log('The switchButton element has the "active" class');
          navigator.geolocation.getCurrentPosition((position) => { 
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
          },
          (error) => {
            console.log("Error Code = " + error.code + " - " + error.message);
          });

    } else {
      console.log('The switchButton element does not have the "active" class');
    }
  }
  



  return (
    <div className="bg-white flex justify-between items-center px-[30px] py-[20px] rounded-bl-[20px] rounded-br-[20px] shadow-panelShadow">
      <span className="text-darkGreen2 text-20 font-450">{type}</span>
      <div className="topLeft flex gap-[30px] items-center">
        {/*<div className="searchContainer relative flex items-center">
                  <input type="text" className="topBarSearch px-[15px] py-[8px] bg-searchBarGrey rounded-50 focus:outline-none focus:ring-2 focus: ring-darkGreen1" placeholder="search" />
                  <AiOutlineSearch className="searchButoon text-white bg-darkGreen4 rounded-50 absolute right-0 text-[60px] p-2 h-full hover:bg-darkGreen2 transition duration-200 ease-in-out" />
              </div>*/}
        <div ref={switchButton} onClick={switchState}>
          <label className="toggle-btn">
            <input type="checkbox" />
            <span className="toggle-text"></span>
          </label>
        </div>
        <IoMdLogOut className="logOutButton text-[25px] text-darkGreen1" />
      </div>
    </div>
  );
};

export default NurseTopBar;
