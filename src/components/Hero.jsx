import React from "react";
import { useThemeContext } from "./Theme";
import { useQuestions } from "./QuestionsContext";

const Hero = () => {
  const { theme } = useThemeContext();
  const { isLoading } = useQuestions();
  return (
    <div className="container select-none flex justify-center">
      <div className=" logo-section flex flex-col items-center justify-center gap-3">
        {isLoading ? (
          <p
            className={` h-5 w-[200px] rounded animate-pulse select-none bg-slate-500`}
          ></p>
        ) : (
          <p
            className={`text-2xl ${
              theme === "light" ? "text-slate-900" : "text-slate-200"
            }`}
          >
            လက်ထောက်ဗေဒင်
          </p>
        )}
      </div>
    </div>
  );
};

export default Hero;
