import React from "react";
import { useNumberContext } from "./NumberContext";
import { Link } from "react-router-dom";

const NumberGrid = ({ id }) => {
  const { numberGridData } = useNumberContext();
  console.log(id);
  return (
    <div className=" grid grid-cols-9 gap-2">
      {numberGridData.map((el, index) => (
        <Link
          to={`/ques/${parseInt(id)}/answer/${el.value}`}
          key={index}
          className="select-none cursor-pointer hover:opacity-70 h-9 w-8 flex justify-center items-center text-white pb-1 bg-[#5b281d]"
        >
          {el.number}
        </Link>
      ))}
    </div>
  );
};

export default NumberGrid;
