import React from "react";

const AnswerUi = ({ answer }) => {
  return (
    <div className="p-3  shadow-xl text-center rounded-lg mb-8 bg-[#5b281d]">
      <p className="animate__delay-1s	 animate__animated animate__fadeIn text-white text-lg md:text-3xl">{answer}</p>
    </div>
  );
};

export default AnswerUi;
