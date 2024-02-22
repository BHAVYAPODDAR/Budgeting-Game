import React from "react";
import NeedWantItem from "./NeedWantItem";

const Activity2 = ({ onNext, onPrevious }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-8">
      <h2 className="text-3xl font-bold mb-4">
        Step 2: Identifying Needs and Wants
      </h2>
      <hr className="my-4" />
      <div className="flex flex-col items-center">
        {/* Your content for Activity 2 here */}
        <NeedWantItem title="Buying Starbucks 4 times a week" />
        <NeedWantItem title="A cellphone plan to call friends and family" />
        <NeedWantItem title="A car to drive to school" />
        <NeedWantItem title="Bus fare to ride the bus to school" />
        <NeedWantItem title="Going out to eat with her friends at a restaurant" />
        <NeedWantItem title="Paint supplies to make arts and crafts" />
        <div className="mt-4">
          <button
            onClick={onPrevious}
            className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2"
          >
            Previous
          </button>
          <button
            onClick={onNext}
            className="bg-green-500 text-white py-2 px-4 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity2;
