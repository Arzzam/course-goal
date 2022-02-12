import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

function CourseInput(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const [validInput, setValidInput] = useState(true);

  function goalInputChangeHandler(event) {
    setEnteredValue(event.target.value);
  }

  function formSubmitHandler(event) {
    if (enteredValue.trim().length === 0) {
      setValidInput(false);
      return;
    }
    event.preventDefault();
    props.onAddGoal(enteredValue);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !validInput ? "red" : null }}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;
