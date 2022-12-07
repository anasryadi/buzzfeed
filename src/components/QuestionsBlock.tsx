import react from "react";
import { Content, Question } from "../../interfaces";
import QuestionBlock from "./QuestionBlock";

const QuestionsBlock = ({ quizItem, setChosenAnswerItems, unansweredQuestionIds, setUnansweredQuestionIds }: { quizItem: Content, setChosenAnswerItems: Function, unansweredQuestionIds: number[] | undefined, setUnansweredQuestionIds: Function }) => {
  console.log(quizItem);
  return (
    <>
      <h2 className="title-block" id={String(quizItem.id)}>
        {quizItem.text}
      </h2>
      <div className="questions-container">
        {quizItem?.questions.map((question: Question, _index: number) => (
          <QuestionBlock key={_index} quizItemId={quizItem.id} question={question} setChosenAnswerItems={setChosenAnswerItems} unansweredQuestionIds={unansweredQuestionIds} setUnansweredQuestionIds={setUnansweredQuestionIds} />
        ))}
      </div>
    </>
  );
};

export default QuestionsBlock;