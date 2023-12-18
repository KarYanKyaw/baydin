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
import HawTan from "./HawTan";

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
      <div
        className={`min-h-screen ${
          theme == "dark" && "bg-slate-700"
        } flex justify-between select-none flex-col my-auto`}
      >
        <NavBar />
        <div className="container animate__animated animate__backInDown flex justify-center items-center flex-col gap-5 my-5">
          <ChosenQuestionUi question={question} />
          <HawTan />
          <AnswerUi answer={answer} />
          <ReChooseBtn location={"answer"} />
        </div>
        <Footer />
      
      </div>
    </>
  );
};

export default AnswerPage;
