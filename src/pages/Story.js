import React, { useState } from "react";
import { Link } from "react-router-dom";

import collegeImage from "../images/collegeImage.gif";
import chaiImage from "../images/chaiImage.gif";
import musicImage from "../images/musicImage.gif";
import libraryImage from "../images/libraryImage.gif";
import calculatorImage from "../images/calculatorImage.gif";

const NextPrevButtons = ({ nextScene, prevScene }) => {
  return (
    <div>
      <button
        onClick={prevScene}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
      >
        Previous
      </button>
      <button
        onClick={nextScene}
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </button>
    </div>
  );
};

const Story = () => {
  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene(scene + 1);
  };

  const prevScene = () => {
    setScene(scene - 1);
  };

  let content;
  switch (scene) {
    case 0:
      content = (
        <div className="h-screen grid grid-cols-2 justify-items-center items-center bg-gradient-to-br from-yellow-300 to-pink-500">
          <div className="col-span-1 flex flex-col justify-center items-center">
            <h1 className="text-4xl text-white mb-6">
              Welcome to "Budget Bazaar: College Chronicles"
            </h1>
            <button
              onClick={nextScene}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            >
              Start!
            </button>
          </div>
          <div className="col-span-1">
            <img
              src={calculatorImage}
              alt="College Gate"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      );
      break;

    case 1:
      content = (
        <div className="h-screen grid grid-cols-2 justify-items-center items-center bg-gradient-to-br from-green-300 to-blue-500">
          <div className="col-span-1">
            <img
              src={collegeImage}
              alt="Kate with Parents"
              className="rounded-lg w-full"
            />
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <h2 className="text-3xl text-white mb-6">Meet Kate</h2>
            <p className="text-lg text-white mb-6">
              Kate is a bright-eyed college freshman with big dreams and a
              limited budget. She's excited to start her college journey but
              needs your help to manage her finances.
            </p>
            <NextPrevButtons nextScene={nextScene} prevScene={prevScene} />
          </div>
        </div>
      );
      break;

    case 2:
      content = (
        <div className="h-screen grid grid-cols-2 justify-items-center items-center bg-gradient-to-br from-purple-300 to-indigo-500">
          <div className="col-span-1">
            <img
              src={libraryImage}
              alt="Library"
              className="rounded-lg w-full"
            />
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <h2 className="text-3xl text-white mb-6">Kate's Income</h2>
            <p className="text-lg text-white mb-6">
              Kate works part-time at a local library and receives an allowance
              from her parents. She earns $15/hour for 5 hours/week and gets
              $100 allowance/month.
            </p>
            <NextPrevButtons nextScene={nextScene} prevScene={prevScene} />
          </div>
        </div>
      );
      break;

    case 3:
      content = (
        <div className="h-screen grid grid-cols-2 justify-items-center items-center bg-gradient-to-br from-red-300 to-yellow-500">
          <div className="col-span-1">
            <img src={chaiImage} alt="Chai" className="rounded-lg w-full" />
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <h2 className="text-3xl text-white mb-6">Kate's Expenses</h2>
            <p className="text-lg text-white mb-6">
              Along with her income, Kate also has expenses like daily chai
              breaks, occasional eating out, and entertainment with friends.
            </p>
            <NextPrevButtons nextScene={nextScene} prevScene={prevScene} />
          </div>
        </div>
      );
      break;

    case 4:
      content = (
        <div className="h-screen grid grid-cols-2 justify-items-center items-center bg-gradient-to-br from-red-300 to-yellow-500">
          <div className="col-span-1">
            <img src={chaiImage} alt="Chai" className="rounded-lg w-full" />
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <h2 className="text-3xl text-white mb-6">Kate's Expenses</h2>
            <p className="text-lg text-white mb-6">
              Along with her income, Kate also has expenses like daily chai
              breaks, occasional eating out, and entertainment with friends.
            </p>
            <NextPrevButtons nextScene={nextScene} prevScene={prevScene} />
          </div>
        </div>
      );
      break;

    case 5:
      content = (
        <div className="h-screen grid grid-cols-2 justify-items-center items-center bg-gradient-to-br from-purple-300 to-indigo-500">
          <div className="col-span-1">
            <img src={musicImage} alt="Music" className="rounded-lg w-full" />
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <h2 className="text-3xl text-white mb-6">Savings Goal</h2>
            <p className="text-lg text-white mb-6">
              Kate dreams of buying a new Indian musical instrument for her
              college band performance in 2 months. Help her achieve her savings
              goal!
            </p>
            <NextPrevButtons nextScene={nextScene} prevScene={prevScene} />
          </div>
        </div>
      );
      break;

    case 6:
      content = (
        <div className="h-screen grid grid-cols-2 justify-items-center items-center bg-gradient-to-br from-yellow-300 to-pink-500">
          <div className="col-span-1">
            <img
              src={collegeImage}
              alt="College"
              className="rounded-lg w-full"
            />
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <h2 className="text-3xl text-white mb-6">
              Thanks for helping Kate!
            </h2>
            <p className="text-lg text-white mb-6">
              Join Kate on her financial journey and see how she thrives!
            </p>
            <div>
              <button
                onClick={prevScene}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
              >
                Previous
              </button>
              <Link to="/activities">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
      break;

    default:
      content = (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-yellow-300 to-pink-500">
          <h2 className="text-3xl text-white mb-6">Thanks for helping Kate!</h2>
          <p className="text-lg text-white mb-6">
            Join Kate on her financial journey and see how she thrives!
          </p>
        </div>
      );
  }

  return <div>{content}</div>;
};

export default Story;
