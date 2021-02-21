import React, { useState, useEffect } from "react";

import { Widget } from "../../components/Widget";
//import db from "../../db.json";
import QuizBackground from "../../components/QuizBackground";
import QuizContainer from "../../components/QuizContainer";
import QuestionWidget from "../QuestionWidget";
import ResultWidget from "../ResultWidget";
import LoadingWidget from "../LoadingWidget";

const screenStates = {
  LOADING: "LOADING",
  QUIZ: "QUIZ",
  RESULT: "RESULT",
};

export default function QuizPage({ externalQuestions, externalBg }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);

  const question = externalQuestions[questionIndex];

  useEffect(() => {
    setTimeout(() => setScreenState(screenStates.QUIZ), 1000);
  }, []);

  function handleSubimt() {
    if (questionIndex < externalQuestions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  function handleResult(result) {
    setResults([...results, result]);
  }

  return (
    <QuizBackground backgroundImage={externalBg}>
      <QuizContainer>
        <Widget>
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
