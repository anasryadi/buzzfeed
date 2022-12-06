import React, { useEffect, useState } from 'react';
import Title from './components/Title';
import { QuizData } from '../interfaces'

const App = () => {
  const [quiz, setQuiz] = useState<QuizData | null>()

  const fetchData = async () => {
    try {
      const reponse = await fetch('http://localhost:8000/quiz/item')
      const json = await reponse.json()
      setQuiz(json)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(quiz)

  return (
    <div>
      <Title />
    </div>
  );
}

export default App;
