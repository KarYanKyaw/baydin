import React from "react";
import { useThemeContext } from "./Theme";

const QuestionsSkeleton = () => {
  return (
    <div
      className={`shadow bg-slate-500 pointer-events-none animate-pulse h-10 rounded mb-3`}
    ></div>
  );
};

export default QuestionsSkeleton;
