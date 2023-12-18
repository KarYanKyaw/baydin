import React from "react";
import Hero from "./Hero";
import { useThemeContext } from "./Theme";
import FormSection from "./FormSection";
import QuestionSection from "./QuestionSection";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Home = () => {
  const { theme } = useThemeContext();
  return (
    <div
      className={`min-h-screen ${
        theme == "dark" && "bg-slate-700"
      } flex justify-between select-none flex-col my-auto`}
    >
      <NavBar />
      <div className=" my-5">
        <Hero />
        <FormSection />
        <QuestionSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
