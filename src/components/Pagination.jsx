import React from "react";
import { useThemeContext } from "./Theme";

const Pagination = () => {
  const { theme } = useThemeContext();
  const paginationAmount = [
    {
      id: 0,
      text: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      ),
    },
    {
      id: 1,
      text: 1,
    },
    {
      id: 2,
      text: 2,
    },
    {
      id: 3,
      text: 3,
    },
    {
      id: 4,
      text: 4,
    },
    {
      id: 5,
      text: 5,
    },
    {
      id: 6,
      text: 6,
    },
    {
      id: 7,
      text: 7,
    },
    {
      id: 8,
      text: 8,
    },
    {
      id: 9,
      text: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      ),
    },
  ];
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-sm">
        {paginationAmount.map(({ id, text }) => (
          <li key={id}>
            <a
              href="#"
              className={`flex items-center justify-center px-6 h-12 ms-0 leading-tight ${
                theme === "light"
                  ? "text-gray-500 hover:bg-gray-200 bg-white border border-gray-300"
                  : "bg-gray-700  border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
