import React from "react";
import { Link } from "react-router-dom";

const ReChooseBtn = ({ location }) => {
  return (
    <Link
      to={"/"}
      className={` ${
        location === "answer" &&
        "animate__delay-2s animate__animated animate__bounceInLeft"
      } inline-block px-1 select-none py-1 rounded text-white hover:opacity-80 bg-[#894131]`}
    >
      မေးခွန်း ပြန်‌ရွေးရန် ဒီကိုနှိပ်ပါ။
    </Link>
  );
};

export default ReChooseBtn;
