import React, { useState, useEffect } from "react";
import { saveUserName } from "../actions/userActions";
import { useDispatch } from "react-redux";
import "../css/homeScreen_style.css";

const HomeScreen = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "USER_RESET" });
    dispatch({ type: "QUESTION_RESET" });
    dispatch({ type: "SCORE_RESET" });
    document.body.style.backgroundColor = "#fff";
  }, [dispatch]);

  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name !== "") {
      dispatch(saveUserName(name));
      history.push("/question");
    }
  };
  return (
    <>
      <div className="card">
        <h1 className="primary-heading">
          Quizzy: The <span className="highlight">React</span> Quiz
        </h1>

        <p className="tag-line">
          Quizzy is a web app built with Node.js and React, using MongoDB
          (NoSQL) to store questions and user scores.
        </p>
        <form className="cta-form">
          <input
            type="text"
            placeholder="Full Name"
            id="full-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="cta-form"
            autoFocus={true}
            autoComplete="off"
          />

          <div className="buttons-container">
            <button
              className={`btn btn-primary  ${
                name === "" ? "disabled-button" : ""
              }`}
              onClick={handleSubmit}
            >
              Get Started
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => history.push("/scoretable")}
            >
              High Scores
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default HomeScreen;
