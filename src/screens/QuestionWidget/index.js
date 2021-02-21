import React, { useState } from "react";
import { Widget } from "../../components/Widget";
import Button from "../../components/Button";
import Form from "../../components/Form";
import BackArrowLink from "../../components/BackArrowLink";

export default function QuestionWidget({
  question,
  totalQuestions,
  currentQuestion,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = useState({
    value: null,
    status: false,
  });
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const questionId = `question__${currentQuestion}`;
  const isCorrect = selectedAlternative.value === question.answer;

  return (
    <>
      <Widget.Header>
        <BackArrowLink href="/" />
        <h3>
          Pergunta {currentQuestion + 1} de {totalQuestions}
        </h3>
      </Widget.Header>

      <img
        src={question.image}
        alt="Descricao"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
      />

      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            setIsFormSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              setSelectedAlternative({ value: null, status: false });
              setIsFormSubmited(false);
              onSubmit();
            }, 2000);
          }}
        >
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`;
            const alternativeStatus = isCorrect ? "SUCCESS" : "ERROR";
            const isSelected = selectedAlternative.value === index;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                key={index}
                data-selected={isSelected}
                data-status={isFormSubmited && alternativeStatus}
              >
                <input
                  style={{ display: "none" }}
                  name={questionId}
                  type="radio"
                  id={alternativeId}
                  onChange={() =>
                    setSelectedAlternative({ value: index, status: true })
                  }
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={!selectedAlternative.status}>
            Confirmar
          </Button>

          {isFormSubmited && isCorrect && <p>Você acertou :)</p>}
          {isFormSubmited && !isCorrect && <p>Você errou :(</p>}
        </Form>
      </Widget.Content>
    </>
  );
}
