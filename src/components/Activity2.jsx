import React, { useState, useEffect } from "react";
import NeedWantItem from "./NeedWantItem";

const Activity2 = ({ onNext, onPrevious }) => {
  const [answers, setAnswers] = useState({
    "Buying Starbucks 4 times a week": null,
    "A cellphone plan to call friends and family": null,
    "A car to drive to school": null,
    "Bus fare to ride the bus to school": null,
    "Going out to eat with her friends at a restaurant": null,
    "Paint supplies to make arts and crafts": null,
  });

  const correctAnswers = {
    "Buying Starbucks 4 times a week": "want",
    "A cellphone plan to call friends and family": "need",
    "A car to drive to school": "want",
    "Bus fare to ride the bus to school": "need",
    "Going out to eat with her friends at a restaurant": "want",
    "Paint supplies to make arts and crafts": "need",
  };

  const handleSelectAnswer = (title, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [title]: value,
    }));
  };

  useEffect(() => {
    const allCorrect = Object.keys(answers).every(
      (title) => answers[title] === correctAnswers[title]
    );
    setIsNextButtonEnabled(allCorrect);
  }, [answers, correctAnswers]);

  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-8">
      <h2 className="text-3xl font-bold mb-4">
        Step 2: Identifying Needs and Wants
      </h2>
      <hr className="my-4" />
      <div className="container mx-auto">
        <div className="flex justify-evenly items-center">
          <div>
            <div className="text-center mb-6">
              <h4 className="text-2xl font-semibold">
                Do you really <span className="italic">need</span> it, or do you
                just <span className="italic">want</span> it?
              </h4>
            </div>
            <div className="mx-auto mb-6 max-w-xl">
              <div className="text-md text-gray-600 text-center mt-2">
                <div className="mb-3">
                  <b>Need:</b> A necessity, something required for life
                </div>
                <div>
                  <b>Want:</b> A desire, something non-essential
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://www.starlingbank.com/static/96580a2de2c57d8b2362871ab1ec5eb5/money-explained-needs-wants.jpg"
            alt="Needs vs Wants"
            className="w-1/3"
          />
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">
            Understanding Needs vs Wants
          </h2>
          <p className="text-sm text-gray-700">
            Needs are essential for survival, like food and shelter. Wants are
            desires, like entertainment and luxury items.
          </p>
          <p className="text-sm text-gray-700">
            Recognizing needs helps prioritize spending on essentials.
            Distinguishing wants helps manage finances wisely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 ">
          {Object.keys(answers).map((title) => (
            <NeedWantItem
              key={title}
              title={title}
              correctAnswer={correctAnswers[title]}
              onSelectAnswer={handleSelectAnswer}
            />
          ))}
        </div>

        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onPrevious}
          >
            Previous
          </button>
          <button
            className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isNextButtonEnabled ? "" : "opacity-50 cursor-not-allowed"
            }`}
            onClick={onNext}
            disabled={!isNextButtonEnabled}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity2;
