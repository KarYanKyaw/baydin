import React, { useState } from "react";
import { useQuestions } from "./QuestionsContext";
import { useThemeContext } from "./Theme";
import QuestionUi from "./QuestionUi";
import Pagination from "./Pagination";
import QuestionHeader from "./QuestionHeader";

const QuestionSection = () => {
  const { questions, questionsToShow } = useQuestions();
  const { theme } = useThemeContext();

  return (
    <div className="container flex flex-col gap-3">
      <QuestionHeader />
      <ul>
        {questionsToShow.length === 0 ? (
          <QuestionUi
            state={false}
            ques={
              "သင်မေးလိုသော မေးခွန်းမတွေ့ပါ။ အခြားစကားလုံးများသုံး၍ ထပ်မံရှာဖွေပါ။"
            }
          />
        ) : (
          questionsToShow.map(({ questionNo, questionName }) => (
            <QuestionUi
              state={true}
              key={questionNo}
              ques={questionName}
              number={questionNo}
            />
          ))
        )}
      </ul>
      <div className=" flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default QuestionSection;
