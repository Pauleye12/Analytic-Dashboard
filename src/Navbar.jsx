import React from "react";


function Navbar() {
  return (
    <div className=" w-screen z-20 fixed top-0 right-0 pl-20  bg-[#FAFAFA] border-b border-[#E5EAEF] py-3  flex justify-between items-center px-5">
      <h1 className="text-[#26282C] text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center gap-6">
        <div className="  flex items-center gap-2 border-[#DADDDD] border rounded-full px-4 py-1  ">
          <button className="grid place-items-center">
            <img src="/images/Icon - Search.png" alt="logo" className=" " />
          </button>
          <input
            className="bg-transparent rounded-md px-1 w-full  py-1 focus:outline-none  "
            type="text"
            placeholder="Search..."
            name=""
            id=""
          />
        </div>
        <div className="flex items-center gap-2  ">
          <img src="/images/solar_calendar-linear.png" alt="" />
          <h1>November 15, 2024</h1>
        </div>
        <div className="rounded-full border border-[#DADDDD] p-3 ">
          <img src="/images/solar_bell-outline.png" alt="" />
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 border border-[#DADDDD] px-2 py-2 rounded-full">
            <div className="rounded-full">
              <img src="/images/Rectangle 1061.png" alt="" />
            </div>
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-[#26282C]">Justin Bergson</h1>
              <h1 className="text-[#787486] text-sm ">Justin@gmail.com</h1>
            </div>
            <button className="ml-2">
              <img src="/images/Arrow - Down 2.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
