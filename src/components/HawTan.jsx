import React from "react";
import { useThemeContext } from "./Theme";

const HawTan = () => {
  const { theme } = useThemeContext();
  return (
    <p
      className={` ${
        theme === "light" ? " text-slate-800" : " text-slate-200"
      } text-lg opacity-80`}
    >
      အတွက်ဟောတမ်းမှာ
    </p>
  );
};

export default HawTan;
