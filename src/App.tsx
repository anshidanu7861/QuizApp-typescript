import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
//Components
import QuestionCard from './components/question';
//types
import { QuestionState, Difficulty } from './API';
// Styles
import { GlobalStyle, Wrapper } from './app.style';

export type AnswerObject = {
  question: string;
  answers: string;
  correct: boolean;
  corrctAnswer: string;
}

const TOTAL_QUESTIONS = 10

function App() {
  const [loading, setLoding ] = useState(false)
  const [ question, setQuestion ] = useState<QuestionState[]>([])
  const [ number, setNumber ] = useState(0)
  const [ userAnswers, setUserAnswers ] = useState<AnswerObject[]>([])
  const [ score, setScore ] = useState(0)
  const [ gameOver, setGameOver ] = useState(true)
  

  const startTrivia = async ()=>{
    setLoding(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestion(newQuestions);
    setScore(0);
    setUserAnswers([])
    setNumber(0);
    setLoding(false)
  }


  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{
    if(!gameOver) {
      // Users Answer
      const answers = e.currentTarget.value
      // Check answer against correct answers
      const correct = question[number].correct_answers === answers
      console.log(correct);
      
      // Add score if answer is correct
      if(correct) setScore(prev => prev + 1)
      // Save answer in the array for user answer
      const answerObject: AnswerObject = {
        question: question[number].question,
        answers,
        correct,
        corrctAnswer: question[number].correct_answers,
      };
      setUserAnswers(prev => [...prev, answerObject])
    }
  }

  const nextQuestion = ()=>{
    const nextQuestion = number + 1

    if(nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    }else{
      setNumber(nextQuestion)
    }
  }

  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>Quiz App</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
      <button className='start' onClick={startTrivia}>
        Start
      </button> 
      ) : null }
      {!gameOver ? <p className='score'>Score: { score }</p> : null }
      {loading && <p>Loding Questions...</p>}

      {!loading && !gameOver && (
      <QuestionCard
      questionNr={number + 1}
      totalQuestion={TOTAL_QUESTIONS}
      question={question[number].question}
      answers={question[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
      />
      )}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS -1 ?(
      <button className='next' onClick={nextQuestion}>Next Question</button>
      ): null }
    </Wrapper>
    </>
  );
}

export default App;
