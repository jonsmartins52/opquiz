import React from "react";
import { useRouter } from "next/router";
import { Widget } from "../../components/Widget";
import Button from "../../components/Button";
import db from "../../../db.json";

export default function ResultWidget({ results }) {
  const router = useRouter();
  return (
    <>
      <Widget.Header>
        <h3>Parabéns {router.query.name}!!</h3>
      </Widget.Header>

      <img
        src={db.end.images.notbad}
        alt="Parabéns você chegou ao fim"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
      />

      <Widget.Content>
        <p>
          Você acertou {results.filter((result) => result).length} perguntas
        </p>
        <ul>
          {results &&
            results.map((result, index) => (
              <li key={index}>
                #0{index + 1} Questão: {result ? "Acertou" : "Errou"}
              </li>
            ))}
        </ul>
        <Button type="submit" onClick={() => router.push("/")}>
          Jogar novamente
        </Button>
      </Widget.Content>
    </>
  );
}
