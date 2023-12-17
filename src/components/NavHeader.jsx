import React from "react";
import { useThemeContext } from "./Theme";

const NavHeader = () => {
  const { theme } = useThemeContext();

  return (
    <p className={`${theme === "light" ? "text-gray-800" : "text-slate-200"} `}>
      <span className=" opacity-80">မင်းသိင်္ခ</span> / လက်ထောက်ဗေဒင်
    </p>
  );
};

export default NavHeader;
