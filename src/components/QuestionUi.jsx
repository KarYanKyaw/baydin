import React from "react";
import { useThemeContext } from "./Theme";
import { Link } from "react-router-dom";
import { useQuestions } from "./QuestionsContext";
import { questionsData } from "../data";

const QuestionUi = ({ number, ques, state }) => {
  const { theme } = useThemeContext();
  const { setInputValue, setQuestions, isLoading } = useQuestions();
  return (
    <>
      {!state && !isLoading ? (
        <Link
          className={`shadow hover:scale-[1.03]  
             bg-red-600 justify-center text-white
           duration-500 cursor-pointer p-3 rounded flex gap-3 mb-5`}
        >
          <p>{number}</p>
          <p>{ques}</p>
        </Link>
      ) : (
        <Link
          onClick={() => {
            setInputValue("");
          }}
          to={`/choose/${number}`}
          className={`shadow hover:scale-[1.03] ${
            theme === "light" ? " text-slate-800" : " text-slate-200"
          }  duration-500 cursor-pointer p-3 rounded flex gap-3 mb-5`}
        >
          <p>{number}</p>
          <p>{ques}</p>
        </Link>
      )}
    </>
  );
};

export default QuestionUi;
