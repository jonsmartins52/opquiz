import styled from "styled-components";
import { Widget } from "../src/components/Widget";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import db from "../db.json";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>One Piece</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Eu serei o Rei dos Piratas</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>One Piece</h1>
            <p>Eu serei o Rei dos Piratas</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jonsmartins52" />
    </QuizBackground>
  );
}
