import { createContext, useContext, useEffect, useState } from "react";
import { questionsData } from "../data";

const Questions = createContext();

export const QuestionsProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);

  const dataFetching = async () => {
    const res = await fetch("http://localhost:3000/questions");
    const data = await res.json();
    setQuestions(data);
    setIsLoading(!isLoading);
    console.log(questions);
  };

  useEffect(() => {
    dataFetching();
  }, []);
  console.log(questions);

  const [inputValue, setInputValue] = useState("");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [quesPerPage, setQuesPerPage] = useState(15);
  const lastQuesIndex = currentPage * quesPerPage;
  const firstQuesIndex = lastQuesIndex - quesPerPage;
  const questionsToShow = questions.slice(firstQuesIndex, lastQuesIndex);
  const totalQues = questions.length;

  let pages = [];
  for (let i = 1; i <= Math.ceil(totalQues / quesPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const searchQuestion = (text) => {
    if (text.length > 3) {
      setQuestions(
        questionsData.filter((el) =>
          el.questionName.toLowerCase().includes(text.toLowerCase())
        )
      );
      console.log(questions);
    } else if (text.length === 0) {
      setQuestions(questionsData);
    }
  };

  const data = {
    questions,
    totalQues,
    quesPerPage,
    currentPage,
    setCurrentPage,
    questionsToShow,
    handleClick,
    setQuestions,
    searchQuestion,
    inputValue,
    setInputValue,
    pages,
    isLoading,
  };
  return <Questions.Provider value={data}>{children}</Questions.Provider>;
};

export const useQuestions = () => useContext(Questions);
