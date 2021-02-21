import React from "react";
import QuizPage from "../../src/screens/Quiz";

export function externalQuiz({ externalDB }) {
  return (
    <QuizPage
      externalQuestions={externalDB.questions}
      externalBg={externalDB}
    />
  );

  /* <div>
      <pre style={{ color: "black" }}>
        {JSON.stringify(externalDB.questions, null, 4)}
      </pre>
    </div> */
}

export default async function getServerSideProps(context) {
  try {
    const [projectName, githubUserName] = context.query.id.split("___");
    const response = await fetch(
      `https://${projectName}.${githubUserName}.vercel.app/api/db`
    );
    /* const response = await fetch(
    "https://aluraquiz-css.omariosouto.vercel.app/api/db"
  ); */
    const dbCSS = await response.json();

    return {
      props: {
        dbCSS,
      },
    };
  } catch (error) {
    console.log("server side error > ", error);
  }
}
