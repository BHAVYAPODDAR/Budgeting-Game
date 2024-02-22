// import React, { useState, useEffect } from "react";
// import ExpenseItem from "./ExpenseItem";

// const Activity1 = ({ onNext }) => {
//   const [answers, setAnswers] = useState({
//     "Part-Time Job": null,
//     Allowance: null,
//     "Eating out": null,
//     "Buying Starbucks": null,
//     "Going out with friends": null,
//     "College supply": null,
//   });

//   const correctAnswers = {
//     "Part-Time Job": "Income",
//     Allowance: "Income",
//     "Eating out": "Expenses",
//     "Buying Starbucks": "Expenses",
//     "Going out with friends": "Expenses",
//     "College supply": "Expenses",
//   };

//   const handleSelectAnswer = (title, value) => {
//     setAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [title]: value,
//     }));
//   };

//   useEffect(() => {
//     // Check if all answers are correct
//     const allCorrect = Object.keys(answers).every(
//       (title) => answers[title] === correctAnswers[title]
//     );
//     // Enable or disable the "Next" button based on allCorrect
//     const nextButton = document.getElementById("nextButton");
//     if (nextButton) {
//       nextButton.disabled = !allCorrect;
//     }
//   }, [answers, correctAnswers]);

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
//             Before starting your budgeting journey, it is essential to know your
//             income and expenses.
//           </p>
//           <p>
//             <b>Income: </b> Think of all the means by which you get money <br />
//             <b>Expenses:</b> Think of all the ways you spend the money you got
//             from your incomes
//           </p>
//           <p>
//             Help Kate identify which of her situations is income or an expense:
//           </p>
//         </div>
//         <div className="grid grid-cols-2 gap-5 mt-5">
//           {Object.keys(answers).map((title) => (
//             <ExpenseItem
//               key={title}
//               title={title}
//               correctAnswer={correctAnswers[title]}
//               onSelectAnswer={handleSelectAnswer}
//             />
//           ))}
//         </div>
//         <div className="mt-4">
//           <button
//             id="nextButton"
//             onClick={onNext}
//             className="bg-green-500 text-white py-2 px-4 rounded-md"
//             disabled={true}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Activity1;

import React, { useState, useEffect } from "react";
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
        <div className="container">
          <h4>
            How much do you <i>make</i> and how much do you <i>spend</i>?
          </h4>
          <p>
            Before starting your budgeting journey, it is essential to know your
            income and expenses.
          </p>
          <p>
            <b>Income: </b> Think of all the means by which you get money <br />
            <b>Expenses:</b> Think of all the ways you spend the money you got
            from your incomes
          </p>
          <p>
            Help Kate identify which of her situations is income or an expense:
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
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
