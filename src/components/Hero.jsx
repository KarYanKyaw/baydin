import React from "react";
import { useThemeContext } from "./Theme";

const Hero = () => {
  const { theme } = useThemeContext();
  return (
    <div className="container select-none flex justify-center">
      <div className=" logo-section flex flex-col items-center justify-center gap-3">
        <p
          className={`text-2xl ${
            theme === "light" ? "text-slate-900" : "text-slate-200"
          }`}
        >
          လက်ထောက်ဗေဒင်
        </p>
      </div>
    </div>
  );
};

export default Hero;
