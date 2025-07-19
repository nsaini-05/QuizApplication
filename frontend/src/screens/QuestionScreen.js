import React, { useEffect, useState } from "react";
import { getQuestion, checkAnswer } from "../actions/questionActions";
import { useDispatch, useSelector } from "react-redux";
import Options from "../components/Options/Options";
import Message from "../components/Message";
import Alert from "../components/Alert";
import "../css/questionScreen_style.css";
import { saveScore } from "../actions/userActions";
import { Loader } from "../components/Loader/Loader";

const QuestionScreen = ({ history }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const dispatch = useDispatch();
  const { questionWithOptions, error, loading } = useSelector(
    (state) => state.question
  );
  const { name } = useSelector((state) => state.user);

  const { selectedOption, success, message } = useSelector(
    (state) => state.answer
  );

  useEffect(() => {
    if (!name) {
      history.push("/");
    }
    dispatch(getQuestion());
    setQuestionNumber((questionNumber) => questionNumber + 1);
  }, [dispatch, history, name]);

  useEffect(() => {
    if (success) {
      dispatch(getQuestion());
      setQuestionNumber((questionNumber) => questionNumber + 1);
    }
  }, [success, dispatch]);

  /*Submit Answer*/
  const handleSubmit = (e) => {
    if (selectedOption) {
      dispatch(checkAnswer(questionWithOptions._id, selectedOption));
    }
  };

  /*Save Score and Exit */
  const saveScoreExit = (e) => {
    dispatch(saveScore(name, questionNumber - 1));
    history.push("/");
  };

  if (loading) return <Loader />;

  return (
    <>
      {error ? (
        <Alert message={"Oops there is an error Try again!!"} />
      ) : message ? (
        <Message score={questionNumber} />
      ) : (
        questionWithOptions && (
          <>
            <div className="question-container">
              <div className="question-text-container">
                <h3 className="question-index-heading">
                  {`Question ${questionNumber}`}
                </h3>
                <h2 className="question-heading">
                  {questionWithOptions.question}
                </h2>
                <Options options={questionWithOptions.options} />
                <div className="nav-buttons-container">
                  <button
                    className="btn btn-nav"
                    onClick={handleSubmit}
                    disabled={!selectedOption}
                  >
                    Submit
                  </button>
                  <button className="btn btn-nav " onClick={saveScoreExit}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </>
  );
};

export default QuestionScreen;
