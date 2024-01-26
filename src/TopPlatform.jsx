import TopPlatformcomp from "./TopPlatformcomp";

const TopPlatformCont = [
  {
    name: "Book Bazaar",
    amount: "$2,500,000",
    percentage: "+15%",
    width: "50%",
    bg: "#6160DC",
  },
  {
    name: "Aisian Aisle",
    amount: "$1,800,000",
    percentage: "+10%",
    width: "40%",
    bg: "#54C5EB",
  },
  {
    name: "Toy Troop",
    amount: "$1,200,000",
    percentage: "+8%",
    width: "20%",
    bg: "#FFB74A",
  },
  {
    name: "XStore",
    amount: "$900,000",
    percentage: "+5%",
    width: "15%",
    bg: "#FF4A55",
  },
];

function TopPlatform() {
  return (
    <div className="flex flex-col px-5 py-4  bg-white w-full border border-[#EDF2F7] gap-5 rounded-2xl ">
      <div className="flex justify-between items-center w-full ">
        <h1 className="text-[#26282C] font-semibold text-lg ">Top Platform</h1>
        <p className="text-[#34CAA5] font-medium text-lg ">See all</p>
      </div>

      <div className="flex flex-col gap-5">
        {TopPlatformCont.map((platform, index) => {
          return <TopPlatformcomp {...platform} key={index} />;
        })}
      </div>
    </div>
  );
}

export default TopPlatform;
