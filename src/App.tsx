import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import { Content, QuizData } from "../interfaces";
import QuestionsBlock from "./components/QuestionsBlock";

const App = () => {
  const [quiz, setQuiz] = useState<QuizData | null>();
  const [chosenAnswerItems, setChosenAnswerItems] = useState<string[]>([]);
  const [unansweredQuestionIds, setUnansweredQuestionIds] = useState<number[] | undefined>(
    []
  );
  console.log(chosenAnswerItems);

  const fetchData = async () => {
    try {
      const reponse = await fetch("http://localhost:8000/quiz/item");
      const json = await reponse.json();
      setQuiz(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const unansweredIds = quiz?.content.map(({id} : Content) => id)
    setUnansweredQuestionIds(unansweredIds)
  }, [quiz])

  console.log(unansweredQuestionIds);

  return (
    <div className="app">
      <Title title={quiz?.title} subtitle={quiz?.subtitle} />
      {quiz?.content.map((content: Content, id: Content["id"]) => (
        <QuestionsBlock
          key={id}
          quizItem={content}
          setChosenAnswerItems={setChosenAnswerItems}
          unansweredQuestionIds={unansweredQuestionIds}
          setUnansweredQuestionIds={setUnansweredQuestionIds}
        />
      ))}
    </div>
  );
};

export default App;
