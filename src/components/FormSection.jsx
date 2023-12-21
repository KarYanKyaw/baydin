import React, { useState } from "react";
import FormHeader from "./FormHeader";
import FormUi from "./FormUi";
import { useQuestions } from "./QuestionsContext";
import TextSkeleton from "./TextSkeleton";

const FormSection = () => {
  const [open, setOpen] = useState(false);
  const controlOpen = () => {
    setOpen(!open);
  };
  const { isLoading } = useQuestions();

  return (
    <section className="container mt-5">
      {isLoading ? (
        <TextSkeleton />
      ) : (
        <>
          <FormHeader open={open} controlOpen={controlOpen} />
          <FormUi open={open} />
        </>
      )}
    </section>
  );
};

export default FormSection;
