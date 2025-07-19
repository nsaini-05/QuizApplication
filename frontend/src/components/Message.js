import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { saveScore } from "../actions/userActions";

const Message = ({ score }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { name } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(saveScore(name, Number(score - 1)));
  }, [dispatch]);

  const RetakeQuiz = () => {
    dispatch({ type: "SELECT_ANSWER_RESET" });
    history.push("/");
  };

  const SeeScores = () => {
    dispatch({ type: "SELECT_ANSWER_RESET" });
    history.push("/scoretable");
  };

  return (
    <>
      <div className="card">
        <h1 className="primary-heading">
          Your Score is : <span className="highlight">{score - 1}</span>
        </h1>
        <p className="tag-line">Thanks for taking the Quiz {name}</p>
        <div className="buttons-container">
          <button className="btn btn-primary" onClick={RetakeQuiz}>
            Retake Quiz
          </button>

          <button className="btn btn-secondary" onClick={SeeScores}>
            Score Table
          </button>
        </div>
      </div>
    </>
  );
};

export default Message;
