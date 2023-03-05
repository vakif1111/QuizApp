import { useEffect, useState } from "react";

import Answer from "./Answer";

const Quiz = (props) => {
  const [ans, setAns] = useState([]);

  useEffect(() => {
    if (props.question) {
      const a = props.question.incorrectAnswers.slice();
      a.push(props.question.correctAnswer);

      a.sort((a, b) => 0.5 - Math.random());
      setAns(a);
    }
  }, [props.question]);

  const answersInDiv = ans.map((answer) => (
    <Answer
      key={answer}
      text={answer}
      handleClick={props.chooseAnswer}
      correctAnswer={props.question.correctAnswer}
      flagQuizActive={props.flagQuizActive}
    />
  ));

  return (
    <>
      <h1> {props.question.question} </h1>
      <div className="answersNextWrap">
        <div className="answers">{answersInDiv}</div>
        {props.flagQuizActive ? <button className="next" onClick={props.getNewQuestion}>New question</button> : null}
      </div>
    </>
  );
};

export default Quiz;
