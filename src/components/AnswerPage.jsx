import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { useThemeContext } from "./Theme";
import { useQuestions } from "./QuestionsContext";
import ChosenQuestionUi from "./ChosenQuestionUi";
import { useAnswers } from "./AnswerContext";
import ReChooseBtn from "./ReChooseBtn";
import AnswerUi from "./AnswerUi";
import Footer from "./Footer";

const AnswerPage = () => {
  const { ques, value } = useParams();
  const { theme } = useThemeContext();
  const { questions } = useQuestions();
  const { answers } = useAnswers();

  const question = questions.find((el) => el.questionNo == ques).questionName;
  const answer = answers.find(
    (el) => el.questionNo == ques && el.answerNo == value
  ).answerResult;

  console.log(ques, value);
  return (
    <>
      <NavBar />
      <div
        className={` min-h-screen  flex flex-col items-center py-8 gap-5 ${
          theme == "dark" && "bg-slate-700"
        } `}
      >
        <div className=" flex items-center flex-col gap-5">
          <ChosenQuestionUi question={question} />
          <p
            className={` ${
              theme === "light" ? " text-slate-800" : " text-slate-200"
            } text-lg opacity-80`}
          >
            အတွက်ဟောတမ်းမှာ
          </p>
          <AnswerUi answer={answer} />
          <ReChooseBtn />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AnswerPage;
