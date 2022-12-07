import react from "react";
import { Question } from "../../interfaces";

const QuestionBlock = ({ question }: { question: Question }) => {
  const handleClick = () => {};

  return (
    <button className="question-block" onClick={handleClick}>
      <img src={question.image} alt={question.alt} />
      <h3>{question.text}</h3>
      <p>
        <a href={question.image}>{question.credits}</a>
        <a href="https://www.unsplash.com">Unsplash</a>
      </p>
    </button>
  );
};

export default QuestionBlock;