import React from "react";
import { useThemeContext } from "./Theme";
import NavHeader from "./NavHeader";
import ThemeBtn from "./ThemeBtn";

const NavBar = () => {
  const { theme } = useThemeContext();
  return (
    <div
      className={`p-5 shadow-lg ${
        theme === "light" ? "bg-gray-300" : "bg-slate-800"
      } `}
    >
      <div className="container flex justify-between items-center ">
        <NavHeader />
        <ThemeBtn />
      </div>
    </div>
  );
};

export default NavBar;
