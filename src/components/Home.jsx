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
    <>
      <NavBar />
      <div
        className={`min-h-screen  flex flex-col gap-5 py-8 ${
          theme == "dark" && "bg-slate-700"
        } `}
      >
        <Hero />
        <FormSection />
        <QuestionSection />
      </div>
        <Footer/>
    </>
  );
};

export default Home;
