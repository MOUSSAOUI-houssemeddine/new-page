import React, { useState, createContext } from "react";
import LeftBar from "../components/doctor profile/LeftBar";
import TopBar from "../components/doctor profile/TopBar";

export const profileContext = createContext();


const ProfileLayout = ({ children, type }) => {

  const [data, setData] = useState();
  const [schedulesData, setSchedulesData] = useState();
  const [dayToShow, setDayToShow] = useState("");




  return (
    <profileContext.Provider value={{ dayToShow, setDayToShow, data, setData, schedulesData, setSchedulesData }}>
    <div className="m-0 p-0 font-rubik bg-creme flex min-h-screen">
      <LeftBar  />
      <div className="px-[30px] pb-[30px] ml-[220px] flex-grow">
        <TopBar  type={ type } />
        <main className="z-10 relative">{ children }</main>
      </div>
      </div>
    </profileContext.Provider>
  );
};

export default ProfileLayout;
