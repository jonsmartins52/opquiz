import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Widget } from "../../src/components/Widget";
import db from "../../db.json";
import QuizBackground from "../../src/components/QuizBackground";
import QuizContainer from "../../src/components/QuizContainer";
import QuestionWidget from "../../src/screens/QuestionWidget";
import ResultWidget from "../../src/screens/ResultWidget";
import LoadingWidget from "../../src/screens/LoadingWidget";

const screenStates = {
  LOADING: "LOADING",
  QUIZ: "QUIZ",
  RESULT: "RESULT",
};

export default function QuizPage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);

  const question = db.questions[questionIndex];

  useEffect(() => {
    setTimeout(() => setScreenState(screenStates.QUIZ), 1000);
  }, []);

  function handleSubimt() {
    if (questionIndex < db.questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  function handleResult(result) {
    setResults([...results, result]);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget
          as={motion.section}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          {screenState === screenStates.QUIZ && (
            <QuestionWidget
              question={question}
              totalQuestions={db.questions.length}
              currentQuestion={questionIndex}
              onSubmit={handleSubimt}
              addResult={handleResult}
            />
          )}

          {screenState === screenStates.LOADING && <LoadingWidget />}

          {screenState === screenStates.RESULT && (
            <ResultWidget results={results} />
          )}
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}
