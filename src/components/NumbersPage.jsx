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
  console.log(questions);
  
  const selectedQuestion = questions.find(
    (el) => el.questionNo == id
  ).questionName;

  return (
    <div
      className={`min-h-screen ${
        theme == "dark" && "bg-slate-700"
      } flex justify-between flex-col my-auto`}
    >
      <NavBar />
      <div className="container flex justify-between gap-5 items-center flex-col my-5">
        <ChosenQuestionUi question={selectedQuestion} />
        <Procedure />
        <NumberGrid id={id} />
        <ReChooseBtn location={"number-grid"} />
      </div>
      <Footer />
    </div>
  );
};

export default NumbersPage;
