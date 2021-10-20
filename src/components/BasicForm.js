import React from "react";
import useInput from "../hooks/use-input";

function BasicForm() {
  const isNotEmpty = (value) => value.trim() !== "";
  const isNotEmptyEmail = (value) => value.includes("@");

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: enteredSurname,
    isValid: enteredSurnameIsValid,
    hasError: surnameInputHasError,
    valueChangeHandler: surnameChangeHandler,
    inputBlurHandler: surnameBlurHandler,
    reset: resetSurname,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isNotEmptyEmail);

  let formIsValid;

  if (enteredNameIsValid && enteredSurnameIsValid && enteredEmailValid) {
    formIsValid = true;
  }

  function formSubmissionHandler(e) {
    e.preventDefault();

    if (!enteredNameIsValid && !enteredSurnameIsValid && !enteredEmailValid) {
      return;
    }

    console.log(enteredName, enteredSurname, enteredEmail);

    resetName();
    resetSurname();
    resetEmail();
  }

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const surnameInputClasses = surnameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={surnameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={surnameChangeHandler}
            onBlur={surnameBlurHandler}
            value={enteredSurname}
          />
          {surnameInputHasError && (
            <p className="error-text">Surname must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}

export default BasicForm;
