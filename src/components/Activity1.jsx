// import React from "react";
// import ExpenseItem from "./ExpenseItem";

// const Activity1 = ({ onNext }) => {
//   return (
//     <div className="bg-white shadow-md rounded-md p-4 mb-8">
//       <h2 className="text-3xl font-bold mb-4">Step 1: Income and Expenses</h2>
//       <hr className="my-4" />
//       <div className="flex flex-col items-center">
//         <div className="container">
//           <h4>
//             How much do you <i>make</i> and how much do you <i>spend</i>?
//           </h4>
//           <p>
//             Before starting your budgeting journey, it is essential to know you
//             income and expenses.
//           </p>
//           <p>
//             <b>Income: </b> Think of all the means that you get money <br />
//             <b>Expenses:</b>
//             Think of all the ways you spend the money you got from your incomes
//           </p>
//           <p>
//             Help Kate identify which of her situation is an income or an
//             expense:
//           </p>
//           {/* <img src= alt="animated character" /> */}
//         </div>
//         <div className="grid grid-cols-2 gap-5 mt-5">
//           <ExpenseItem title="Part-Time Job" />
//           <ExpenseItem title="Allowance" />
//           <ExpenseItem title="Eating out" />
//           <ExpenseItem title="Buying Starbucks" />
//           <ExpenseItem title="Going out with friends" />
//           <ExpenseItem title="College supply" />
//         </div>
//         <div className="mt-4">
//           <button
//             onClick={onNext}
//             className="bg-green-500 text-white py-2 px-4 rounded-md"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Activity1;

import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";

const Activity1 = ({ onNext }) => {
  const [answers, setAnswers] = useState({
    "Part-Time Job": null,
    Allowance: null,
    "Eating out": null,
    "Buying Starbucks": null,
    "Going out with friends": null,
    "College supply": null,
  });

  const handleCheckAnswer = () => {
    const correctAnswers = {
      "Part-Time Job": "Income",
      Allowance: "Income",
      "Eating out": "Expenses",
      "Buying Starbucks": "Expenses",
      "Going out with friends": "Expenses",
      "College supply": "Expenses",
    };

    const updatedAnswers = {};
    for (const expense in answers) {
      const selectedAnswer = answers[expense];
      const correctAnswer = correctAnswers[expense];
      updatedAnswers[expense] =
        selectedAnswer === correctAnswer ? "Correct" : "Wrong";
      console.log(
        `${expense} - Selected: ${selectedAnswer}, Correct: ${correctAnswer}, Result: ${updatedAnswers[expense]}`
      );
    }
    setAnswers(updatedAnswers);
  };

  const handleSelectAnswer = (title, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [title]: value,
    }));
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-8">
      <h2 className="text-3xl font-bold mb-4">Step 1: Income and Expenses</h2>
      <hr className="my-4" />
      <div className="flex flex-col items-center">
        <div className="container">
          <h4>
            How much do you <i>make</i> and how much do you <i>spend</i>?
          </h4>
          <p>
            Before starting your budgeting journey, it is essential to know you
            income and expenses.
          </p>
          <p>
            <b>Income: </b> Think of all the means that you get money <br />
            <b>Expenses:</b>
            Think of all the ways you spend the money you got from your incomes
          </p>
          <p>
            Help Kate identify which of her situation is an income or an
            expense:
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <ExpenseItem
            title="Part-Time Job"
            onSelectAnswer={handleSelectAnswer}
          />
          <ExpenseItem title="Allowance" onSelectAnswer={handleSelectAnswer} />
          <ExpenseItem title="Eating out" onSelectAnswer={handleSelectAnswer} />
          <ExpenseItem
            title="Buying Starbucks"
            onSelectAnswer={handleSelectAnswer}
          />
          <ExpenseItem
            title="Going out with friends"
            onSelectAnswer={handleSelectAnswer}
          />
          <ExpenseItem
            title="College supply"
            onSelectAnswer={handleSelectAnswer}
          />
        </div>
        <div className="mt-4">
          <button
            onClick={handleCheckAnswer}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
          >
            Check Answer
          </button>
          <button
            onClick={onNext}
            className="bg-green-500 text-white py-2 px-4 rounded-md"
          >
            Next
          </button>
        </div>
        <div className="mt-4">
          {Object.entries(answers).map(([expense, result]) => (
            <p key={expense}>
              {expense}: {result}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity1;
