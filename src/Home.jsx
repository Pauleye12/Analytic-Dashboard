import React from "react";
import SalesTrend from "./SalesTrend";
import LastOrders from "./LastOrders";
import DisplayBox from "./DisplayBox";
import TopPlatform from "./TopPlatform";

function Home() {
  return (
    <div className="pt-[100px] pl-[80px] grid grid-cols-[1fr_auto] grid-rows-[auto_auto] gap-5">
      <SalesTrend />
      <DisplayBox />
      <LastOrders />

      <TopPlatform />
    </div>
  );
}

export default Home;
