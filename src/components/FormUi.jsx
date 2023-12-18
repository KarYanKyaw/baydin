import React, { useEffect, useRef, useState } from "react";
import { useThemeContext } from "./Theme";
import { useQuestions } from "./QuestionsContext";

const FormUi = ({ open }) => {
  const { theme } = useThemeContext();
  const { searchQuestion, inputValue, setInputValue } = useQuestions();
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    open && (
      <div className="min-w-full mb-3 grid grid-cols-12">
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            searchQuestion(event.target.value);
          }}
          type="text"
          className={`border ${
            theme === "light"
              ? "bg-gray-500 border-gray-500 border-e-white text-gray-100"
              : "bg-white"
          } px-3 rounded-s outline-none col-span-10 md:col-span-11 py-1 md:py-2`}
        />

        <button
          className={`border-slate-800 col-span-2 md:col-span-1 rounded-e flex justify-center py-1 md:py-2 px-3 ${
            theme === "light" ? " bg-gray-500" : " bg-slate-800"
          } `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="stroke-white w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    )
  );
};

export default FormUi;
