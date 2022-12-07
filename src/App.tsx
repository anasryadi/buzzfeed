import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import { Content, QuizData } from "../interfaces";
import QuestionsBlock from "./components/QuestionsBlock";

const App = () => {
  const [quiz, setQuiz] = useState<QuizData | null>();

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

  console.log(quiz);

  return (
    <div className="app">
      <Title title={quiz?.title} subtitle={quiz?.subtitle} />
      {quiz?.content.map((content: Content, id: Content["id"]) => (
        <QuestionsBlock key={id} quizItem={content} />
      ))}
    </div>
  );
};

export default App;
