import React from "react";
import Hero from "./Hero";
import { useThemeContext } from "./Theme";

const Home = () => {
  const { theme } = useThemeContext();
  return (
    <div className={`min-h-screen pt-8 ${theme == "dark" && "bg-slate-700"} `}>
      <Hero />
    </div>
  );
};

export default Home;
