import React from "react";

function Sidebar() {
  return (
    <div className=" z-30 h-screen fixed left-0 top-0 bg-white border-r border-[#E5EAEF] ">
      <div className="flex flex-col bg-[#F7F8FA] items-center justify-between py-5 px-2  h-full">
        <div className="flex flex-col items-center gap-6 h-full text-[#57678c] text-2xl">
          <img
            src="/images/Vector.png"
            alt="logo"
            className=" cursor-pointer "
          />
          <img
            src="/images/category.png"
            alt="logo"
            className=" cursor-pointer "
          />
          <img
            src="/images/trend-up.png"
            alt="logo"
            className=" cursor-pointer "
          />
          <img src="/images/Icon.png" alt="logo" className=" cursor-pointer " />
          <img src="/images/box.png" alt="logo" className=" cursor-pointer " />
          <img
            src="/images/discount-shape.png"
            alt="logo"
            className=" cursor-pointer "
          />
          <img
            src="/images/info-circle.png"
            alt="logo"
            className=" cursor-pointer "
          />
          <img
            src="/images/brightness.png"
            alt="logo"
            className=" cursor-pointer "
          />
          <img
            src="/images/moon 1.png"
            alt="logo"
            className=" cursor-pointer "
          />
        </div>
        <div className="flex flex-col items-center gap-6 text-[#57678c] text-2xl">
          <img
            src="/images/arrow-right.png"
            alt="logo"
            className=" cursor-pointer "
          />
          <img
            src="/images/setting-2.png"
            alt="logo"
            className=" cursor-pointer "
          />
          <img
            src="/images/logout.png"
            alt="logo"
            className=" cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
