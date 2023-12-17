import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import NumbersPage from "./components/NumbersPage";
import AnswerPage from "./components/AnswerPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/choose/:id" element={<NumbersPage />} />
      <Route path="/ques/:ques/answer/:value" element={<AnswerPage />} />
    </Routes>
  );
};

export default App;
