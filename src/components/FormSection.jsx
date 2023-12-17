import React, { useState } from "react";
import FormHeader from "./FormHeader";
import FormUi from "./FormUi";

const FormSection = () => {
  const [open, setOpen] = useState(false);
  const controlOpen = () => {
    setOpen(!open);
  };


  return (
    <section className="container flex flex-col gap-3">
      <FormHeader open={open} controlOpen={controlOpen} />
      <FormUi open={open} />
    </section>
  );
};

export default FormSection;
