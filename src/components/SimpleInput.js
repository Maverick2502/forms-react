import React, { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();

  function nameInputChangeHandler(e) {
    setEnteredName(e.target.value);
  }

  function formSubmissionHandler(e) {
    e.preventDefault();
    if (enteredName.trim() === "") {
      return;
    }

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // Resetting entered value not possible with useRef();
    setEnteredName("");
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          // Resetting entered value
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
