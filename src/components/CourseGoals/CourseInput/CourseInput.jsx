import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    background-color: red;
    border-color: white;
  }

  &.invalid label {
    color: red;
  }
`;

function CourseInput(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const [validInput, setValidInput] = useState(true);

  function goalInputChangeHandler(event) {
    if (event.target.value.trim().length > 0) {
      setValidInput(true);
    }
    setEnteredValue(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValidInput(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={!validInput && "invalid"}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;
