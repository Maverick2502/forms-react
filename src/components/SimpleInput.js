import React, { useState } from "react";

function SimpleInput(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  function nameInputChangeHandler(e) {
    setEnteredName(e.target.value);
  }

  function nameInputBlurHandler(e) {
    setEnteredNameTouched(true);
  }

  function formSubmissionHandler(e) {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // Resetting entered value not good with useRef();
    setEnteredName("");
    setEnteredNameTouched(false);
  }

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          // Resetting entered value
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
}

export default SimpleInput;
