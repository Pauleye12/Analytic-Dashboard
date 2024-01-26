import React from "react";
import TableDets from "./TableDets";

const LastOrderUsers = [
  {
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    amount: "$80,000",
    status: "Paid",
    image: "Frame.png",
  },
  {
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: "$150,000",
    status: "Refund",
    image: "Frame1.png",
  },
  {
    name: "Corey schieifer",
    date: "Nov 14, 2023",
    amount: "$87,000",
    status: "Paid",
    image: "Frame(2).png",
  },
  {
    name: "Cooper Press",
    date: "Nov 14, 2023",
    amount: "$100,000",
    status: "Refund",
    image: "Frame(3).png",
  },
  {
    name: "Philip Lubin",
    date: "Nov 13, 2023",
    amount: "$78,000",
    status: "Paid",
    image: "Frame(4).png",
  },
];

function LastOrders() {
  return (
    <div className="flex flex-col px-5 py-4  bg-white w-full border border-[#EDF2F7] rounded-2xl ">
      <div className="flex justify-between items-center w-full ">
        <p className="text-[#26282C] font-semibold text-lg ">Last Orders</p>
        <p className="text-[#34CAA5] font-medium text-lg ">See all</p>
      </div>
      <div className="w-full">
        <table className="w-full">
          <tr className="text-[#9CA4AB] font-medium text-left  ">
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Invoice</th>
          </tr>
          {LastOrderUsers.map((e, index) => {
            console.log(e, "e");
            return <TableDets {...e} key={index} />;
          })}
        </table>
      </div>
    </div>
  );
}

export default LastOrders;
