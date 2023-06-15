import React, { useState } from "react";
import "./Form.css";
import Button from "../Buttons/Button";

function Form(props) {
  /*const [titleName, setTitleName] = useState('');
  const [amountNumber, setAmountNumber] = useState('');
  const [dateFinal, setDateFinal] = useState('');*/

  const [condition, setCondition] = useState(false);
const isTrue = Boolean(condition);


  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });



  // Best way to use previous states
  const changeTitleHandler = (event) => {
    /*setUserInput({...userInput,
        enteredTitle: event.target.value});*/

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const changeAmountHandler = (event) => {
    /* setUserInput({...userInput,
        enteredAmount: event.target.value});*/

    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const changeDateHandler = (event) => {
    /*setUserInput({...userInput,
        enteredDate: event.target.value});*/

    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const submittedData = {
        title: userInput.enteredTitle,
        amount: +userInput.enteredAmount,
        date: new Date(userInput.enteredDate)
    }

props.sendFormData(submittedData);

    setUserInput({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
      });

      if(userInput.enteredTitle !== "" || userInput.enteredAmount !== "" || userInput.enteredDate !== ""){
        setCondition(false);
      }

  };

const conditiontrueActionHandler = () =>{
  setCondition(true);
}
const conditionfalseActionHandler = () =>{
  setCondition(false);
}
  return (
    <>
    {isTrue ? ( <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <input
            type="text"
            placeholder="Title"
            value={userInput.enteredTitle}
            onChange={changeTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <input
            type="number"
            placeholder="Amount"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <input
            type="date"
            placeholder="Date"
            min="2023-01-01"
            max="2024-12-31"
            value={userInput.enteredDate}
            onChange={changeDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button onClick={conditionfalseActionHandler}>Cancle</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>) : (<Button getAction={conditiontrueActionHandler} />)}

    </>


   
  );
}

export default Form;
