function Box({ box, chart, mainText, subText, percentage, bgGreen, status }) {
  return (
    <div className="flex flex-col bg-white border border-[#EDF2F7] rounded-2xl p-4 w-full ">
      <div className="flex justify-between gap-1 items-center w-full ">
        <div className="flex justify-center items-center rounded-full border border-[#E6E6E6] p-2">
          <img src={`/images/${box}.png`} alt="" />
        </div>
        <div>
          <img src={`/images/${chart}.png`} alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-between items-start gap-1 w-full">
        <h1 className="text-[#898989] font-medium text-lg ">{mainText}</h1>
        <p className="text-[#3A3F51] font-semibold text-2xl ">{subText}</p>
      </div>
      <div className="flex items-center justify-between">
        <div
          className={
            bgGreen
              ? "bg-[#34CAA51F] flex items-center justify-center gap-1 px-1 py-1 max-w-[70px] w-full rounded-full text-[#34CAA5]  "
              : "bg-[#ED544E1F] flex items-center justify-center gap-1 px-1 py-1 max-w-[70px] w-full rounded-full text-[#ED544E]  "
          }
        >
          <img src={`/images/${status}.png`} alt="" />
          <span className=" text-xs font-medium ">{percentage}</span>
        </div>
        <div className="text-[#606060] w-fit text-end text-sm">
          vs. previous month
        </div>
      </div>
    </div>
  );
}

export default Box;
