import React from "react";
import { Link } from "react-router-dom";

const ReChooseBtn = () => {
  return (
    <Link
      to={"/"}
      className=" inline-block px-4 select-none py-2 rounded text-white hover:opacity-80 bg-[#894131]"
    >
      မေးခွန်း ပြန်‌ရွေးရန် ဒီကိုနှိပ်ပါ။
    </Link>
  );
};

export default ReChooseBtn;
