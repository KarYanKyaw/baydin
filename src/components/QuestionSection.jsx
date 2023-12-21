import React, { useState } from "react";
import { useQuestions } from "./QuestionsContext";
import { useThemeContext } from "./Theme";
import QuestionUi from "./QuestionUi";
import Pagination from "./Pagination";
import QuestionHeader from "./QuestionHeader";
import QuestionsSkeleton from "./QuestionsSkeleton";

const QuestionSection = () => {
  const { isLoading, questionsToShow } = useQuestions();

  return (
    <div className="container flex flex-col gap-5">
      <QuestionHeader />
      <div>
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <QuestionsSkeleton key={index} />
          ))
        ) : (
          <ul>
            {questionsToShow.map(({ questionNo, questionName }) => (
              <QuestionUi
                state={true}
                key={questionNo}
                ques={questionName}
                number={questionNo}
              />
            ))}
          </ul>
        )}
      </div>

      <div className=" flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default QuestionSection;
