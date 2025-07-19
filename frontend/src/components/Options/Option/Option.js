import React from "react";
import { useDispatch } from "react-redux";
import { selectAnswer } from "../../../actions/questionActions";
import { useSelector } from "react-redux";
const Option = ({ option }) => {
  const dispatch = useDispatch();
  const handleChange = (answer) => {
    dispatch(selectAnswer(answer));
  };

  const { selectedOption } = useSelector((state) => state.answer);

  return (
    <button
      key={option._id}
      className={`btn btn-secondary ${
        selectedOption === option.value ? "selected-option" : ""
      }`}
      onClick={() => handleChange(option.value)}
    >
      {option.label}. {option.value}
    </button>
  );
};

export default Option;
