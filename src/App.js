import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import Quiz from "./components/Quiz";
import Stats from "./components/Stats";
import Options from "./components/Options";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  const [question, setQuestion] = useState(false);
  const [allQuestion, setAllQuestion] = useState(0);
  const [corretQuestion, setCorretQuestion] = useState(0);
  const [flagQuizActive, setFlagQuizActive] = useState(true);

  const [category, setCategory] = useState("any");
  const [difficulty, setDifficulty] = useState("any");

  const getNewQuestion = () => {
    setFlagQuizActive(false);
    fetch(
      `https://the-trivia-api.com/api/questions?${
        category === "any" ? "" : `categories=${category.replaceAll(" ", "_")}&`
      }limit=1${difficulty === "any" ? "" : `&difficulty=${difficulty}`}`
    )
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw Error(res.status);
      })
      .then((res) => res.json())
      .then((data) => setQuestion(data[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getNewQuestion();
    // eslint-disable-next-line
  }, []);


  const chooseAnswer = (picked) => {
    setAllQuestion((prevState) => prevState + 1);

    setFlagQuizActive(true);

    if (picked === question.correctAnswer) {
      setCorretQuestion((prevState) => prevState + 1);
    }
  };
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <NavLink to="/QuizApp/" exact activeClassName="">
                Quiz
              </NavLink>
            </li>
            <li>
              <NavLink to="/QuizApp/options" activeClassName="">
                Options
              </NavLink>
            </li>
            <li>
              <NavLink to="/QuizApp/stats" activeClassName="">
                Stats
              </NavLink>
            </li>
          </ul>
        </nav>
        <section>
          <Routes>
            <Route
              exact
              path="/QuizApp/"
              element={
                <Quiz
                  question={question}
                  getNewQuestion={getNewQuestion}
                  chooseAnswer={chooseAnswer}
                  flagQuizActive={flagQuizActive}
                />
              }
            />
            <Route
              path="/QuizApp/options"
              element={
                <Options
                  category={category}
                  setCategory={setCategory}
                  difficulty={difficulty}
                  setDifficulty={setDifficulty}
                  getNewQuestion={getNewQuestion}
                />
              }
            />
            <Route
              path="/QuizApp/stats"
              element={
                <Stats
                  allQuestion={allQuestion}
                  corretQuestion={corretQuestion}
                />
              }
            />
            <Route element={<ErrorPage />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
};

export default App;
