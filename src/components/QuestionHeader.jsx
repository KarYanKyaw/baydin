import React from "react";
import { useThemeContext } from "./Theme";
import { useQuestions } from "./QuestionsContext";

const QuestionHeader = () => {
  const { theme } = useThemeContext();
  const { isLoading } = useQuestions();
  return (
    <>
      {isLoading ? (
        <p
          className={` h-3 w-[200px] rounded animate-pulse select-none bg-slate-500`}
        ></p>
      ) : (
        <p
          className={`text-lg md:text-2xl select-none ${
            theme === "light" ? " text-gray-800" : " text-slate-200"
          }`}
        >
          မေးလိုသည့် မေးခွန်းအား ရွေးပါ။
        </p>
      )}
    </>
  );
};

export default QuestionHeader;
