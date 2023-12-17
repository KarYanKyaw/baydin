import React from "react";
import { useThemeContext } from "./Theme";

const Footer = () => {
  const { theme } = useThemeContext();
  return (
    <div
      className={`p-3 flex text-center justify-between items-center shadow-lg ${
        theme === "light"
          ? "bg-slate-300 text-slate-800"
          : "bg-slate-800 text-slate-200"
      } `}
    >
      <div className="container ">
        <p>&copy; reserved to Kar Yan Kyaw 2023</p>
      </div>
    </div>
  );
};

export default Footer;
