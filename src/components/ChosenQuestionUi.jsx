import React from "react";
import { useThemeContext } from "./Theme";

const ChosenQuestionUi = ({ question }) => {
  const { theme } = useThemeContext();
  return (
    <>
      <p
        className={`text-base text-center md:text-xl  ${
          theme === "light" ? " text-slate-800" : " text-slate-200"
        } font-medium`}
      >
        " {question} "
      </p>
    </>
  );
};

export default ChosenQuestionUi;
