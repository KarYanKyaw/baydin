import React from "react";
import { useThemeContext } from "./Theme";

const FormHeader = ({ open, controlOpen }) => {
  const { theme } = useThemeContext();
  return (
    <div
      onClick={() => controlOpen()}
      className={`${
        theme === "light" ? "bg-gray-500" : " bg-slate-200"
      } select-none rounded cursor-pointer hover:opacity-80 flex justify-between items-center p-3`}
    >
      <p
        className={`text-lg md:text-xl  ${
          theme === "light" ? " text-slate-200" : " text-slate-800"
        } font-medium`}
      >
        {open
          ? "မေးလိုသည့် မေးခွန်းအား ရိုက်ရှာပါ။"
          : "မေးလိုသည့် မေးခွန်းအား ရှာဖွေရန် နှိပ်ပါ။"}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-6 ${
          theme === "light" ? " stroke-slate-200" : "stroke-slate-800"
        } h-6 ${open && " rotate-180"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
};

export default FormHeader;
