import React from "react";
import { useThemeContext } from "./Theme";
import { useQuestions } from "./QuestionsContext";

const Pagination = () => {
  const { theme } = useThemeContext();

  const { totalQues, quesPerPage, currentPage, pages, handleClick } =
    useQuestions();

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex gap-3 text-sm">
        {pages.map((page, index) => (
          <li
            onClick={() => handleClick(page)}
            key={index}
            className={`flex  ${
              page == currentPage && "bg-slate-800"
            }  rounded select-none cursor-pointer items-center justify-center px-4 py-2 ms-0 leading-tight  bg-slate-500  border-gray-700 text-slate-200 hover:bg-slate-800 hover:text-white"
            `}
          >
            {page}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
