import React from "react";
import logo from "../assets/logo.png";
import { useThemeContext } from "./Theme";

const Hero = () => {
  const { theme } = useThemeContext();
  return (
    <div className="">
      <div className="container flex justify-center">
        <div className=" logo-section flex flex-col items-center justify-center gap-3">
          <img src={logo} className={`rounded-full w-24 h-24`} alt="" />
          <p
            className={`text-2xl ${
              theme === "light" ? "text-slate-900" : "text-slate-200"
            }`}
          >
            လက်ထောက်ဗေဒင်
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
