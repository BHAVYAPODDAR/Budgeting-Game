import React from "react";

const NeedWantItem = ({ title }) => {
  return (
    <div className="bg-gray-200 shadow-md rounded-md p-4 mb-4 w-96">
      <p>{title}</p>
      <div className="flex justify-between mt-2">
        <input type="radio" name={title} value="need" className="mr-2" /> Need
        <input
          type="radio"
          name={title}
          value="want"
          className="ml-4 mr-2"
        />{" "}
        Want
      </div>
    </div>
  );
};

export default NeedWantItem;
