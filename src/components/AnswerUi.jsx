import React from "react";

const AnswerUi = ({ answer }) => {
  return (
    <div className="p-3 shadow-xl text-center rounded-lg mb-8 bg-[#5b281d]">
      <p className=" text-white text-lg md:text-3xl">{answer}</p>
    </div>
  );
};

export default AnswerUi;
