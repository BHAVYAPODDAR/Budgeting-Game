import React, { useState } from "react";
import Activity1 from "../components/Activity1";
import Activity2 from "../components/Activity2";
import Activity3 from "../components/Activity3";

const Activities = () => {
  const [currentActivity, setCurrentActivity] = useState(1);

  const handleNextActivity = () => {
    setCurrentActivity((prevActivity) => prevActivity + 1);
  };

  const handlePreviousActivity = () => {
    setCurrentActivity((prevActivity) => prevActivity - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button className="absolute top-4 left-4 bg-blue-500 text-white py-2 px-4 rounded-md">
        <i className="fa fa-home"></i> Home
      </button>

      <div className="container mx-auto mt-8 p-4">
        {currentActivity === 1 && <Activity1 onNext={handleNextActivity} />}

        {currentActivity === 2 && (
          <Activity2
            onNext={handleNextActivity}
            onPrevious={handlePreviousActivity}
          />
        )}

        {currentActivity === 3 && (
          <Activity3 onPrevious={handlePreviousActivity} />
        )}
      </div>
    </div>
  );
};

export default Activities;
