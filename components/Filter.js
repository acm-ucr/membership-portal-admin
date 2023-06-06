const Filter = ({ topic, color }) => {
  return (
    <div className="w-full h-full pl-1 pr-2 py-1 flex justify-between bg-acm-white rounded-full">
      <div
        className={`${color} w-5 h-5 self-center flex-none rounded-full`}
      ></div>
      <div className="font-lexend text-xs min-w-fit text-black flex justify-center items-center ">
        {topic}
      </div>
    </div>
  );
};

export default Filter;
