import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";

const Activity1 = ({ onNext }) => {
  const [answers, setAnswers] = useState({
    "Part-Time Job": null,
    Allowance: null,
    "Eating out": null,
    "Buying Starbucks": null,
    "Going out with friends": null,
    "College supply": null,
  });

  const correctAnswers = {
    "Part-Time Job": "Income",
    Allowance: "Income",
    "Eating out": "Expenses",
    "Buying Starbucks": "Expenses",
    "Going out with friends": "Expenses",
    "College supply": "Expenses",
  };

  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);

  const handleSelectAnswer = (title, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [title]: value,
    }));
  };

  useEffect(() => {
    // Check if all answers are correct
    const allCorrect = Object.keys(answers).every(
      (title) => answers[title] === correctAnswers[title]
    );
    // Set the state to enable or disable the "Next" button based on allCorrect
    setIsNextButtonEnabled(allCorrect);
  }, [answers, correctAnswers]);

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-8">
      <h2 className="text-3xl font-bold mb-4">Step 1: Income and Expenses</h2>
      <hr className="my-4" />
      <div className="flex flex-col items-center">
        <div className="flex jutify-evenly items-center">
          <div className="flex w-1/3 justify-evenly">
            <span className="text-2xl font-bold">
              <GiReceiveMoney size={100} /> Income
            </span>
            <span className="text-2xl font-bold">
              <GiPayMoney size={100} /> Expenses
            </span>
          </div>

          <div className="lg:w-full lg:pl-10">
            <h2 className="text-3xl font-bold mb-4">
              Understanding Your Finances
            </h2>
            <p className="text-lg mb-4">
              Welcome to your budgeting journey! Let's dive into understanding
              your income and expenses.
            </p>
            <p className="mb-4">
              <b>Income:</b>{" "}
              <span className="bg-lime-300 text-black">
                Your income is all the money you earn or receive.
              </span>
              It includes your salary, allowances, and any other sources of
              income.
            </p>
            <p className="mb-4">
              <b>Expenses:</b>{" "}
              <span className="bg-lime-300 text-black">
                Expenses are the money you spend.
              </span>
              This includes everything from buying coffee to paying bills and
              beyond.
            </p>
            <p className="mb-4">
              Help Kate identify whether each situation is an income or an
              expense:
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {Object.keys(answers).map((title) => (
            <ExpenseItem
              key={title}
              title={title}
              correctAnswer={correctAnswers[title]}
              onSelectAnswer={handleSelectAnswer}
            />
          ))}
        </div>
        <div className="mt-4">
          <button
            onClick={onNext}
            className={`bg-green-500 text-white py-2 px-4 rounded-md ${
              isNextButtonEnabled ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isNextButtonEnabled}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity1;
