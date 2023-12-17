import React from "react";
import { useQuestions } from "./Questions";
import { useThemeContext } from "./Theme";

const QuestionSection = () => {
  const { questions } = useQuestions();

  return <div>ques</div>;
};

export default QuestionSection;
