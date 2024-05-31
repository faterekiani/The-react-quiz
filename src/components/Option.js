import React from "react";

export default function Option({ question, dispatch, answer }) {
  const isAnswered = answer !== null;
  return (
    <>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={option}
            className={`btn btn-option  ${
              isAnswered &&
              (question.correctOption === index ? "correct" : "wrong")
            } ${answer === index ? "answer" : ""}`}
            onClick={() => dispatch({ type: "answerQuestion", payload: index })}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}
