import { useState } from "react";

const Prices = [
  8000, 18000, 4000, 26000, 9000, 45000, 9000, 20000, 33000, 4000, 30000, 26000,
];

const maxValue = Math.max(...Prices);

const divisor = 4;

const dividedMaxValue = maxValue / divisor;

const yAxis = Array.from(Array(divisor + 1).keys()).map((e) => {
  return e * dividedMaxValue;
});

yAxis.push(maxValue + dividedMaxValue);
const graphMax = Math.max(...yAxis);
const NewyAxis = yAxis.reverse();

console.log(yAxis);

const Labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Daily = ["Sun", "Mon", "Tue", "Wed", "Thrs", "Fri", "Sat"];

// const changeTimeFrame = (timeFrame) => {
//   setTimeFame(timeFrame);
// };

function SalesTrend() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [timeFrame, setTimeFrame] = useState("Weekly");
  const selectTimeFrame = (e) => {
    setTimeFrame(e.target.innerText);
  };
  return (
    <div className="flex items-start w-full h-full">
      <div className="bg-white p-5 w-full border border-[#EDF2F7] rounded-2xl">
        <div className="flex pb-2 justify-between items-center">
          <h1>Sales Trends</h1>
          <div className="flex items-center gap-2">
            <p className="hidden sm:flex">Short by:</p>
            <button
              className="flex items-center gap-1 border rounded-full border-[#E5EAEF] px-3 py-[5px] relative "
              onClick={() => {
                setShowDropdown((prev) => !prev);
              }}
            >
              <p className="hidden sm:flex">{timeFrame}</p>
              <img src="/images/Arrow - Down 2.png" alt="" />
              {showDropdown && (
                <ul className="absolute bottom-[-120px] left-[50%] translate-x-[-50%] border px-2 py-2 rounded-lg text-left lg:w-full w-max flex flex-col gap-2 ">
                  <li onClick={selectTimeFrame}>Monthly</li>
                  <li onClick={selectTimeFrame}>Weekly</li>
                  <li onClick={selectTimeFrame}>Daily</li>
                </ul>
              )}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-[80px_auto] grid-rows-[300px_auto] overflow-x-auto ">
          <div className="flex flex-col justify-between items-center gap-6 border-r mr-[2px] ">
            {NewyAxis.map((e, index) => {
              return (
                <p
                  className="text-[#525252] font-semibold text-xs "
                  key={index}
                >
                  {e}
                </p>
              );
            })}
          </div>
          <div className="flex justify-between gap-[6px] items-end ">
            {Prices.map((e, index) => {
              return (
                <div
                  key={index}
                  style={{ height: (e / graphMax) * 100 + "%" }}
                  className="w-8 rounded-t-full relative bg-[#34CAA51A] bg-gradient-to-b hover:from-[#3acca8] hover:from-[20%] cursor-pointer "
                  onMouseEnter={() => {
                    //console.log(`hover-${index}`);
                    let hoverElement = document.getElementById(
                      `hover-${index}`
                    );
                    hoverElement.classList.remove("hidden");
                    hoverElement.classList.add("flex");
                    //console.log(hoverElement);
                  }}
                  onMouseLeave={() => {
                    let hoverElement = document.getElementById(
                      `hover-${index}`
                    );
                    hoverElement.classList.remove("flex");
                    hoverElement.classList.add("hidden");
                  }}
                >
                  <div
                    className="absolute hidden bg-[#090C2C] py-2 px-3 text-white text-xs left-[50%] translate-x-[-50%] top-[-40px] rounded-lg  "
                    id={`hover-${index}`}
                  >
                    {`$${e}`}
                  </div>
                </div>
              );
            })}
          </div>
          <div />
          <div className="flex justify-between gap-[6px] h-fit">
            {Labels.map((e, index) => {
              return (
                <p
                  className="text-[#525252] w-8   flex-none font-semibold text-center"
                  key={index}
                >
                  <span className="text-sm ">{e}</span>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesTrend;
