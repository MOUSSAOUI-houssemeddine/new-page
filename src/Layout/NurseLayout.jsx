import React, { useState, useEffect, createContext } from 'react';
import NurseLeftBar from '../components/nurseProfile/NurseLeftBar';
import NurseTopBar from '../components/nurseProfile/NurseTopBar';

export const NurseDataContext = createContext();

const NurseLayout = ({ type, children }) => {

const [NurseData, setNurseData] = useState();
  



  return (
    <NurseDataContext.Provider value={{ NurseData, setNurseData }}>
    <div className="m-0 p-0 font-rubik bg-creme flex min-h-screen ">
      <NurseLeftBar />
      <div className="px-[30px] pb-[30px] ml-[220px] flex-grow">
        <NurseTopBar  type={ type } />
        <main className="z-10 relative">{ children }</main>
      </div>
      </div>
    </NurseDataContext.Provider>
  );
}

export default NurseLayout
