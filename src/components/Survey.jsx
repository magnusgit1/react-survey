
/* eslint-disable react/prop-types */

import AnswersList from "./AnswersList";
import Form from "./Form";

import { useState } from "react";

function Survey({ answers, setAnswers }) {
  const [open] = useState(false); //Ignore this state

  const [values, setValues] = useState({
        review:"",
        inputName:"",
        email:"",
        color:"",
        spendTime:[],
        checkedSwimming:false,
        checkedBathing:false,
        checkedChatting:false,
        checkedNoTime:false,
        checkedColor:false
    });

    const onChange = (event) => {

        const eventName = event.target.name 
        const eventValue = event.target.value
        const eventChecked = event.target.checked

        if (eventName === "color"){
            setValues({ ...values, color: eventValue, checkedColor: eventChecked});
        } else if (eventName === "review"){
            setValues({ ...values, review: eventValue })
        } else if (eventName === "username"){
            setValues({ ...values, inputName: eventValue })
        } else if (eventName === "email"){
            setValues({ ...values, email: eventValue })
        }


        setValues((prev) => {
          const alreadySelected = prev.spendTime.includes(eventValue);
          return {
            ...prev,
            spendTime: alreadySelected ? prev.spendTime.filter((it) => it !== eventValue) : [...prev.spendTime, eventValue]
          }
        })
    };

    const onSubmit = (event) => {
      event.preventDefault();
      console.log(values)
      setAnswers((curr) => [...curr, values])
    }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers}/>
      </section>
      <section className="survey__form">
        <Form onChange={onChange} values={values} onSubmit={onSubmit}/>
        /
      </section>
    </main>
  );
}

export default Survey;
