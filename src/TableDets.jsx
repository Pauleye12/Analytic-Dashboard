function TableDets({ name, date, amount, status, image }) {
  console.log(name);
  return (
    <tr className="border-t  border-[#EDF2F6]  ">
      <td className="flex items-center gap-1 text-[#3A3F51] font-medium">
        <img className="hidden" src={`/images/${image}`} alt="" />
        <p>{name}</p>
      </td>
      <td className="text-[#737373]">{date}</td>
      <td className="text-[#0D062D font-medium ">{amount}</td>
      <td className="text-[#737373]">{status}</td>
      <td className="text-[#0D062D] flex items-center gap-1">
        <img src="/images/download.png" alt="" /> <span>View</span>
      </td>
    </tr>
  );
}

export default TableDets;
