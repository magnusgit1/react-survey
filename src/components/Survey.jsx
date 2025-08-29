
/* eslint-disable react/prop-types */

import AnswersList from "./AnswersList";
import Form from "./Form";

import { useState } from "react";

function Survey({onChange}) {
  const [open, setOpen] = useState(false); //Ignore this state

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList/>
      </section>
      <section className="survey__form"><Form onChange={onChange}/>/</section>
    </main>
  );
}

export default Survey;
