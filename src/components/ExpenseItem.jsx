// ExpenseItem.js
import React from "react";

const ExpenseItem = ({ title }) => {
  return (
    <div className="bg-gray-200 shadow-md rounded-md p-4 mb-4 w-96">
      <p>{title}</p>
      <div className="flex justify-around mt-2">
        <span>
          <input type="radio" name={title} value="income" className="" /> Income
        </span>
        <span>
          <input type="radio" name={title} value="expense" className="" />{" "}
          Expense
        </span>
      </div>
    </div>
  );
};

export default ExpenseItem;
