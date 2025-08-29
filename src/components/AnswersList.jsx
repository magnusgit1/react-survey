import AnswersItem from "./AnswersItem";

/* eslint-disable react/prop-types */

export default function AnswersList({ answersList }) {
  return (
    <>
    <ul>
      {answersList.map((answer, i) => (
        <AnswersItem 
          key={i} 
          answerItem={{
            username: answer.inputName,
            color: answer.color,
            timeSpent: answer.spendTime,
            review: answer.review
          }} 
          />
      ))}
    </ul>
    </>
  );
}
