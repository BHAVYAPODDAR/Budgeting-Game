import React, { useState, useEffect } from "react";

const ExpenseItem = ({ title, onSelectAnswer, correctAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("bg-gray-200");

  useEffect(() => {
    if (selectedOption === correctAnswer) {
      setBackgroundColor("bg-green-200");
    } else if (selectedOption !== null) {
      setBackgroundColor("bg-red-200");
    } else {
      setBackgroundColor("bg-gray-200");
    }
  }, [selectedOption, correctAnswer]);

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onSelectAnswer(title, selectedValue);
  };

  return (
    <div className={`shadow-md rounded-md p-4 mb-4 w-96 ${backgroundColor}`}>
      <p>{title}</p>
      <div className="flex justify-around mt-2">
        <span>
          <input
            type="radio"
            name={title}
            value="Income"
            className=""
            checked={selectedOption === "Income"}
            onChange={handleOptionChange}
          />{" "}
          Income
        </span>
        <span>
          <input
            type="radio"
            name={title}
            value="Expenses"
            className=""
            checked={selectedOption === "Expenses"}
            onChange={handleOptionChange}
          />{" "}
          Expense
        </span>
      </div>
    </div>
  );
};

export default ExpenseItem;
