import Box from "./Box";
const BoxDets = [
  {
    box: "box-tick",
    chart: "Group 3",
    mainText: "Total Order",
    subText: "350",
    percentage: "23.5%",
    bgGreen: true,
    status: "profit",
  },
  {
    box: "3d-rotate",
    chart: "Group 4",
    mainText: "Total Refund",
    subText: "270",
    percentage: "23.5%",
    bgGreen: false,
    status: "loss",
  },
  {
    box: "shopping-cart",
    chart: "Group 4",
    mainText: "Average Sales",
    subText: "1567",
    percentage: "23.5%",
    bgGreen: true,
    status: "profit",
  },
  {
    box: "coin",
    chart: "Group 3",
    mainText: "Total Sales",
    subText: "$350.000",
    percentage: "23.5%",
    bgGreen: false,
    status: "loss",
  },
];

function DisplayBox() {
  return (
    <div className="items-center gap-5 w-full justify-between grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
      {BoxDets.map((box, index) => {
        return <Box {...box} key={index} />;
      })}
    </div>
  );
}

export default DisplayBox;
