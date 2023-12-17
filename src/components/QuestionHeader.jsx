import React from "react";
import { useThemeContext } from "./Theme";

const QuestionHeader = () => {
  const { theme } = useThemeContext();
  return (
    <p
      className={`text-lg md:text-2xl select-none ${
        theme === "light" ? " text-gray-800" : " text-slate-200"
      }`}
    >
      မေးလိုသည့် မေးခွန်းအား ရွေးပါ။
    </p>
  );
};

export default QuestionHeader;
