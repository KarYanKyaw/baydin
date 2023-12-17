import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./components/Theme.jsx";
import { QuestionsProvider } from "./components/Questions.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeContextProvider>
      <QuestionsProvider>
        <App />
      </QuestionsProvider>
    </ThemeContextProvider>
  </BrowserRouter>
);
