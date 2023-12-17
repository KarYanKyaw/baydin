import React from "react";
import { useThemeContext } from "./Theme";
import { Link } from "react-router-dom";

const QuestionUi = ({ number, ques, state }) => {
  const { theme } = useThemeContext();
  return (
    <>
      {state ? (
        <Link
          to={`/choose/${number}`}
          className={`shadow hover:scale-[1.03] ${
            theme === "light" ? " text-slate-800" : " text-slate-200"
          }  duration-500 cursor-pointer p-3 rounded flex gap-3 mb-5`}
        >
          <p>{number}</p>
          <p>{ques}</p>
        </Link>
      ) : (
        <Link
          className={`shadow hover:scale-[1.03]  
             bg-red-600 justify-center text-white
           duration-500 cursor-pointer p-3 rounded flex gap-3 mb-5`}
        >
          <p>{number}</p>
          <p>{ques}</p>
        </Link>
      )}
    </>
  );
};

export default QuestionUi;
