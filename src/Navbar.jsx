import { useState } from "react";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className=" w-full z-20 fixed top-0 left-0 pl-20  bg-[#FAFAFA] border-b border-[#E5EAEF] py-3  flex flex-col items-start gap-2 px-5">
      <div className="flex justify-between items-center w-full ">
        <h1 className="text-[#26282C] text-xl font-semibold">Dashboard</h1>

        <div className="flex items-center gap-2 lg:gap-6 justify-between">
          <div className=" hidden md:flex items-center gap-2 border-[#DADDDD] border rounded-full px-4 py-1  ">
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
          <div className=" hidden lg:flex items-center gap-2  ">
            <img src="/images/solar_calendar-linear.png" alt="" />
            <h1>November 15, 2024</h1>
          </div>
          <button className=" relative rounded-full border border-[#DADDDD] p-3 ">
            <img src="/images/solar_bell-outline.png" alt="" />
            <div className="bg-[#f45252] rounded-full py-1 px-2 absolute top-[-7px] right-[-5px] text-white text-xs font-semibold">
              2
            </div>
          </button>
          <div
            className="flex gap-2 relative "
            onMouseOver={() => {
              setShowDropdown(true);
            }}
            onMouseOut={() => {
              setShowDropdown(false);
            }}
          >
            <div className="flex items-center gap-2 lg:border border-[#DADDDD] px-2 py-2 rounded-full cursor-pointer ">
              <div className="rounded-full">
                <img src="/images/Rectangle 1061.png" alt="" />
              </div>
              <div className=" hidden lg:flex justify-center items-center flex-col">
                <h1 className="text-[#26282C]">Justin Bergson</h1>
                <h1 className="text-[#787486] text-sm ">Justin@gmail.com</h1>
              </div>
              <button className="ml-2 hidden lg:flex ">
                <img src="/images/Arrow - Down 2.png" alt="" />
              </button>
            </div>
            {showDropdown && (
              <div className="absolute bottom-[-120px]  left-[50%] translate-x-[-50%] lg:w-full w-max pt-7">
                <ul className=" border px-2 py-2 rounded-lg text-left w-full flex flex-col text-[#26282C] gap-2 bg-white ">
                  <li className="cursor-pointer flex items-center gap-2">
                    <img
                      src="/images/Rectangle 1061.png"
                      alt=""
                      className="w-5 "
                    />{" "}
                    <span>View Profile</span>
                  </li>
                  <li className="cursor-pointer flex items-center gap-2">
                    <img src="/images/Icon.png" alt="logo" className="w-5 " />{" "}
                    <span>Switch User</span>
                  </li>
                  <li className="cursor-pointer text-[red] flex items-center gap-2">
                    {" "}
                    <img
                      src="/images/logout.png"
                      alt="logo"
                      className=" w-5 "
                    />
                    <span>Sign Out</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className=" md:hidden flex items-center gap-2 border-[#DADDDD] border rounded-full px-4 py-1  ">
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
    </div>
  );
}

export default Navbar;
