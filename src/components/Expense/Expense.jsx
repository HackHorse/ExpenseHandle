import React, { useState } from "react";
import ExpenseItem from "../ExpenseItems/ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseGraph/ExpenseFilter";
import ExpenseGraph from "../ExpenseGraph/ExpenseGraph";

function Expense(props) {
  const [filterYear, setFilterYear] = useState("2023");

  const getGraphYearData = (year) => {
    setFilterYear(year);
  };

  const filterYearArray = props.items.filter((expenselist) => {
    return expenselist.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} changeGraphData={getGraphYearData} />
      <ExpenseGraph expenses={filterYearArray} />
      {filterYearArray.length === 0 ? (
        <p style={{ color: "#fff", fontWeight: '700'}}>No Expenses Found!!!</p>
      ) : (
        filterYearArray.map((expensedata, index) => (
          <ExpenseItem
            key={index}
            date={expensedata.date}
            title={expensedata.title}
            amount={expensedata.amount}
          />
        ))
      )}
    </Card>
  );
}

export default Expense;
