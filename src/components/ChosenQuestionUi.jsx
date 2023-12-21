import React from "react";
import { useThemeContext } from "./Theme";
import { useNumberContext } from "./NumberContext";
import TextSkeleton from "./TextSkeleton";

const ChosenQuestionUi = ({ question }) => {
  const { theme } = useThemeContext();
  const { numberPageLoading } = useNumberContext();
  return (
    <>
      {numberPageLoading ? (
        <TextSkeleton />
      ) : (
        <p
          className={`text-base text-center md:text-xl  ${
            theme === "light" ? " text-slate-800" : " text-slate-200"
          } font-medium`}
        >
          " {question} "
        </p>
      )}
    </>
  );
};

export default ChosenQuestionUi;
