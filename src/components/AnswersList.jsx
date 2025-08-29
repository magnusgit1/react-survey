import AnswersItem from "./AnswersItem";

/* eslint-disable react/prop-types */

export default function AnswersList({ answersList = [] }) {
  console.log("Inside AnswersList: ", answersList);

  return (
    <>
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
    </>
  );
}
