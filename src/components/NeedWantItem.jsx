import React, { useState, useEffect } from "react";

const NeedWantItem = ({ title, correctAnswer, onSelectAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("bg-gray-200");
  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onSelectAnswer(title, selectedValue);
  };

  useEffect(() => {
    if (selectedOption === correctAnswer) {
      setBackgroundColor("bg-green-200");
    } else if (selectedOption !== null) {
      setBackgroundColor("bg-red-200");
    } else {
      setBackgroundColor("bg-gray-200");
    }
  }, [selectedOption, correctAnswer]);

  return (
    <div className={`${backgroundColor} shadow-md rounded-md p-4 mb-4 w-96`}>
      <p>{title}</p>
      <div className="flex justify-evenly mt-2">
        <label>
          <input
            type="radio"
            name={title}
            value="need"
            className="mr-2"
            checked={selectedOption === "need"}
            onChange={handleOptionChange}
          />{" "}
          Need
        </label>
        <label>
          <input
            type="radio"
            name={title}
            value="want"
            className="ml-4 mr-2"
            checked={selectedOption === "want"}
            onChange={handleOptionChange}
          />{" "}
          Want
        </label>
      </div>
    </div>
  );
};

export default NeedWantItem;
