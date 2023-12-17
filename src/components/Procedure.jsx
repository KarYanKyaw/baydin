import React from "react";
import { useThemeContext } from "./Theme";

const Procedure = () => {
  const { theme } = useThemeContext();
  return (
    <div className="p-1 select-none bg-[#5b281d]">
      <p className={`text-sm md:text-xl opacity-80  text-slate-200`}>
        မျက်စိမှတ်၍ လက်ထောက်ပြီး ဂဏန်းတစ်ခုအား ရွေးပါ။
      </p>
    </div>
  );
};

export default Procedure;
