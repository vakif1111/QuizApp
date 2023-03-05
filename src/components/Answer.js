import "../styles/Answer.scss";

const Answer = (props) => {
  return (
    <div
      className={
        props.flagQuizActive
          ? props.text === props.correctAnswer
            ? "active"
            : "inactive"
          : null
      }
      key={props.flagQuizActive}
    >
      <button onClick={() => props.handleClick(props.text)} disabled={props.flagQuizActive ? true : false} >
        {props.text}
      </button>
    </div>
  );
};

export default Answer;
