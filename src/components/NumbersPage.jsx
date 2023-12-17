import React from "react";
import { useParams } from "react-router-dom";
import { useQuestions } from "./QuestionsContext";
import NavBar from "./NavBar";
import { useThemeContext } from "./Theme";
import ReChooseBtn from "./ReChooseBtn";
import ChosenQuestionUi from "./ChosenQuestionUi";
import NumberGrid from "./NumberGrid";
import Procedure from "./Procedure";
import Footer from "./Footer";

const NumbersPage = () => {
  const { id } = useParams();
  const { theme } = useThemeContext();
  const { questions } = useQuestions();
  const selectedQuestion = questions.find(
    (el) => el.questionNo == id
  ).questionName;

  return (
    <>
      <NavBar />
      <div
        className={`min-h-screen  flex flex-col items-center gap-5 py-8 ${
          theme == "dark" && "bg-slate-700"
        } `}
      >
        <ChosenQuestionUi question={selectedQuestion} />
        <Procedure />
        <NumberGrid id={id} />
        <ReChooseBtn />
      </div>
      <Footer />
    </>
  );
};

export default NumbersPage;
