import React from "react";
import SalesTrend from "./SalesTrend";
import LastOrders from "./LastOrders";
import DisplayBox from "./DisplayBox";
import TopPlatform from "./TopPlatform";

function Home() {
  return (
    <div className="pt-[120px] flex flex-col lg:grid lg:grid-cols-[0.55fr_0.45fr] gap-3 w-full pl-[70px] px-4 py-5 ">
      <SalesTrend />
      <DisplayBox />
      <LastOrders />

      <TopPlatform />
    </div>
  );
}

export default Home;
