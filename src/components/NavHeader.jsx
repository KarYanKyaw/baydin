import React from "react";
import { useThemeContext } from "./Theme";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavHeader = () => {
  const { theme } = useThemeContext();

  return (
    <Link to={"/"} className=" flex gap-3 items-center cursor-pointer">
      <img src={logo} className={`rounded-full w-12 h-12`} alt="" />

      <p
        className={`${theme === "light" ? "text-gray-800" : "text-slate-200"} `}
      >
        <span className=" opacity-80">မင်းသိင်္ခ</span> / လက်ထောက်ဗေဒင်
      </p>
    </Link>
  );
};

export default NavHeader;
