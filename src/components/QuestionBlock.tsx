import react from "react";
import { Question } from "../../interfaces";

const QuestionBlock = ({ quizItemId,question, setChosenAnswerItems, unansweredQuestionIds, setUnansweredQuestionIds }: { quizItemId: number, question: Question, setChosenAnswerItems: Function, unansweredQuestionIds: number[] | undefined, setUnansweredQuestionIds: Function }) => {
  const handleClick = () => {
    setChosenAnswerItems((prevState: string[]) => [...prevState, question.text])
    setUnansweredQuestionIds(unansweredQuestionIds?.filter((id: number) => id !== quizItemId))
  };

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