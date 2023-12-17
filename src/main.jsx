import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./components/Theme.jsx";
import { QuestionsProvider } from "./components/QuestionsContext.jsx";
import { NumberContextProvider } from "./components/NumberContext.jsx";
import { AnswerContextProvider } from "./components/AnswerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeContextProvider>
      <QuestionsProvider>
        <NumberContextProvider>
          <AnswerContextProvider>
            <App />
          </AnswerContextProvider>
        </NumberContextProvider>
      </QuestionsProvider>
    </ThemeContextProvider>
  </BrowserRouter>
);
