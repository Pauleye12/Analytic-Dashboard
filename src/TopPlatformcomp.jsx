function TopPlatformcomp({ name, amount, percentage, bg, width }) {
  return (
    <div className="flex flex-col items-start gap-4 ">
      <div className="text-[#22242C] font-semibold text-lg ">{name}</div>
      <div className="w-full h-3 bg-[#F5F5F5] rounded-full ">
        <div
          style={{ width: width, backgroundColor: bg }}
          className=" rounded-full h-3 "
        ></div>
      </div>
      <div className="flex w-full justify-between items-center text-lg text-[#525252]">
        <div className="text-lg text-[#525252] ">{amount}</div>
        <div>{percentage}</div>
      </div>
    </div>
  );
}

export default TopPlatformcomp;
