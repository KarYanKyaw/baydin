import React from "react";
import { useNumberContext } from "./NumberContext";
import { Link, useNavigate } from "react-router-dom";
import { openSwal } from "../createSwal";

const NumberGrid = ({ id }) => {
  const { numberGridData } = useNumberContext();

  const navigate = useNavigate();

  const handleClick = async (id, value) => {
    openSwal();

    setTimeout(() => {
      navigate(`/ques/${parseInt(id)}/answer/${value}`);
    }, 2100);
  };

  return (
    <div className=" grid grid-cols-9 gap-2">
      {numberGridData.map((el, index) => (
        <button
          onClick={() => handleClick(id, el.value)}
          key={index}
          className="select-none cursor-pointer hover:opacity-70 h-9 w-8 flex justify-center items-center text-white pb-1 bg-[#5b281d]"
        >
          {el.number}
        </button>
      ))}
    </div>
  );
};

export default NumberGrid;
