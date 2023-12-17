import { createContext, useContext, useState } from "react";
import { questionsData } from "../data";

const Questions = createContext();

export const QuestionsProvider = ({ children }) => {
  const [questions, setQuestions] = useState(questionsData);
  const data = { questions };
  return <Questions.Provider value={data}>{children}</Questions.Provider>;
};

export const useQuestions = () => useContext(Questions);
