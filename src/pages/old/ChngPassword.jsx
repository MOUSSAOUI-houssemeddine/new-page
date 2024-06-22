import React from "react";

const ChngPassword = () => {
  return (
    <div>
      <header className="flex bg-darkGreen1 h-full w-full text-white  py-4 ">
        <button> --- Back</button>
      </header>

      <div className="flex flex-col content-between p-4">
        {" "}
        Old Password :
        <input
          type="Password"
          className="p-2 rounded-full w-full shadow-xl"
          placeholder="Old Password"
        />
      </div>

      <div className=" flex flex-col content-between p-4">
        {" "}
        New Password :
        <input
          type="Password"
          className="p-2 rounded-full w-full shadow-xl"
          placeholder="New Password"
        />
        <input
          type="Password"
          className="p-2 rounded-full w-full shadow-xl mt-2"
          placeholder="Confi Password"
        />
        <div className="flex flex-col  bg-darkGreen2  text-white p-3  rounded-full shadow-xl mt-2 hover:greenHover">
          <button>Click</button>
        </div>
      </div>
    </div>
  );
};

export default ChngPassword
