import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Survey from "./components/Survey";

/* eslint-disable react/prop-types */

export default function App() {
  const [answers, setAnswers] = useState([]);

  return (
    <>
      <Header />
      <Survey answers={answers} setAnswers={setAnswers}/>
    </>
  );
}
