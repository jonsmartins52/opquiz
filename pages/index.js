import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import { Widget } from "../src/components/Widget";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import db from "../db.json";
import Input from "../src/components/Input";
import Button from "../src/components/Button";

export default function Home() {
  const [name, setName] = useState("");

  const router = useRouter();
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>OpQuiz - Pirata que estica</title>
      </Head>
      <QuizContainer>
        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: "0" },
            hidden: { opacity: 0, y: "100%" },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>OPQuiz</Widget.Header>
          <Widget.Content>
            <p>Eu serei o Rei dos Piratas</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <Input
                name="userName"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button type="submit" disabled={!name?.length}>
                Jogar {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h2>Quizzes da galera</h2>

            <ul>
              {db.external.map((ext, index) => {
                const [projectName, githubUserName] = ext
                  .replace(/\//g, "")
                  .replace("https:", "")
                  .replace(".vercel.app", "")
                  .split(".");

                const presentText = [projectName, githubUserName].join("/");
                return (
                  <li key={index}>
                    <Widget.Topic
                      href={`/quiz/${projectName}___${githubUserName}`}
                    >
                      {presentText}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jonsmartins52" />
    </QuizBackground>
  );
}
