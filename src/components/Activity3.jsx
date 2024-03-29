import React, { useState } from "react";
import { Link } from "react-router-dom";
import budget from "../images/economist_3.png";

const Activity3 = ({ onPrevious }) => {
  // Constants for fixed expenses
  const PHONE_BILL = 30;
  const GUITAR_PRICE = 120;
  const STARBUCKS_DRINK_PRICE = 6;
  const DINE_OUT = 25;
  const FRIENDS = 15;
  const BUS_FARE = 5;

  // State variables
  const [expenses, setExpenses] = useState({
    drinks: 4, // Updated to 4 for $96 initially
    eatOut: 1, // Updated to 5 for $100 initially
    friends: 1, // Updated to 4 for $60 initially
    bus: 5, // Updated to 20 for $100 initially
  });

  // Calculate total expenses
  const totalDrinks = expenses.drinks * STARBUCKS_DRINK_PRICE * 4;
  const totalEatOut = expenses.eatOut * DINE_OUT * 4;
  const totalFriends = expenses.friends * FRIENDS * 4;
  const totalBus = expenses.bus * BUS_FARE * 4;
  const totalExpenses =
    totalDrinks + totalEatOut + totalFriends + totalBus + PHONE_BILL;

  const [result, setResult] = useState(totalExpenses);

  const calculate = () => {
    // Calculate remaining amount after expenses
    const totalIncome = 400; // Kate's total income
    const remainingAmount = totalIncome - totalExpenses;

    // Check if Kate can afford the guitar
    const canAffordGuitar = remainingAmount >= GUITAR_PRICE;

    // Set result message based on affordability
    setResult(
      `Total Expenses: $${totalExpenses}\nRemaining Amount: $${remainingAmount}\n${
        canAffordGuitar
          ? "Congratulations! You can afford to buy the guitar!"
          : "Sorry, you cannot afford to buy the guitar yet. Try to save more!"
      }`
    );
  };

  const handleExpenseChange = (e, expense) => {
    const value = parseInt(e.target.value);
    setExpenses((prevExpenses) => ({
      ...prevExpenses,
      [expense]: value,
    }));
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-4">Let's Budget!</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-8 rounded-md">
          <div className="mb-6">
            <img src={budget} alt="animated character" className="h-full" />
          </div>
          <p className="text-center">
            A budget is a comparison of income and expenses. It's an organized
            way to manage your money.
          </p>
        </div>

        <div className="bg-gray-800 text-white p-8 rounded-md">
          <h2 className="text-3xl font-bold text-center mb-4">
            Kate's Finance
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p>Total Income:</p>
              <p className="text-green-500">$400</p>
            </div>
            <div className="text-center">
              <p>Price of Guitar Kate Wants:</p>
              <p className="text-yellow-400">$150</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="font-bold">Current Monthly Expenses:</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p>Starbucks Drinks:</p>
                <p className="text-red-600">$96 ($6 x 4 times) per week</p>
              </div>
              <div>
                <p>Dining Out:</p>
                <p className="text-red-600">$100 ($25 x 1 times) per week</p>
              </div>
              <div>
                <p>Going Out with Friends:</p>
                <p className="text-red-600">$60 ($15 x 1 times) per week</p>
              </div>
              <div>
                <p>Bus Fare:</p>
                <p className="text-red-600">$100 ($5 x 5 times) per week</p>
              </div>
              <div>
                <p>Phone Bill:</p>
                <p className="text-red-600">$30</p>
              </div>
            </div>
          </div>
          <p className="font-bold mt-6">Summary:</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>Total Expense:</p>
              <p className="text-red-600">$386</p>
            </div>
            <div>
              <p>Monthly savings:</p>
              <p className="text-green-600">$14</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-6">
        <div className="bg-gray-100 p-8 rounded-md">
          <h2 className="text-3xl font-bold text-center mb-4">
            Manage Your Expenses
          </h2>
          <p className="text-center mb-6">
            Help Kate decide how much she can spend on various activities{" "}
            <span className="font-bold">per week.</span>
          </p>

          <div className="flex gap-5 justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-2/3">
              <div>
                <label htmlFor="drinks" className="block font-semibold mb-2">
                  Starbucks Drinks:
                </label>
                <input
                  type="number"
                  id="drinks"
                  min="0"
                  max="50"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  placeholder="Number of drinks per week"
                  onChange={(e) => handleExpenseChange(e, "drinks")}
                />
              </div>
              <div>
                <label htmlFor="eatOut" className="block font-semibold mb-2">
                  Dining Out:
                </label>
                <input
                  type="number"
                  id="eatOut"
                  min="0"
                  max="7" // Maximum days in a week
                  className="border border-gray-300 rounded-md p-2 w-full"
                  placeholder="Number of times per week"
                  onChange={(e) => handleExpenseChange(e, "eatOut")}
                />
              </div>

              <div>
                <label htmlFor="friends" className="block font-semibold mb-2">
                  Going Out with Friends:
                </label>
                <input
                  type="number"
                  id="friends"
                  min="0"
                  max="7" // Maximum days in a week
                  className="border border-gray-300 rounded-md p-2 w-full"
                  placeholder="Number of times per week"
                  onChange={(e) => handleExpenseChange(e, "friends")}
                />
              </div>
              <div>
                <label htmlFor="bus" className="block font-semibold mb-2">
                  Bus Fare:
                </label>
                <input
                  type="number"
                  id="bus"
                  min="0"
                  max="50"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  placeholder="Number of times per week"
                  onChange={(e) => handleExpenseChange(e, "bus")}
                />
              </div>
            </div>
            <div className="container mx-auto bg-gray-800 text-white w-1/3 rounded-lg">
              <div className="px-4 py-8">
                <h2 className="text-3xl font-bold text-center mb-4">
                  Live Monthly Expenses
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p>Starbucks Drinks:</p>
                    <p className="text-center">${totalDrinks}</p>
                  </div>
                  <div>
                    <p>Dining Out:</p>
                    <p className="text-center">${totalEatOut}</p>
                  </div>
                  <div>
                    <p>Going Out with Friends:</p>
                    <p className="text-center">${totalFriends}</p>
                  </div>
                  <div>
                    <p>Bus Fare:</p>
                    <p className="text-center">${totalBus}</p>
                  </div>
                  <div>
                    <p>Phone Bill:</p>
                    <p className="text-center">${PHONE_BILL}</p>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-red-600">
                    Total Expenses: ${totalExpenses}
                  </p>
                  <p className="text-yellow-400">
                    Savings: ${400 - totalExpenses}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              type="button"
              className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline"
              onClick={calculate}
            >
              Calculate Revised Expenses
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="resultModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className=" w-fit mx-auto text-gray-900 text-xl p-3 font-bold">
              <h5 className="modal-title" id="modalTitle">
                Revised Expenses
              </h5>
            </div>
            <div
              className={`mb-6 p-4 rounded-md ${
                totalExpenses > 280
                  ? "bg-red-600 text-white"
                  : "bg-green-600 text-white"
              }`}
            >
              <p id="summary">{result}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded-full mr-2 hover:bg-gray-600 focus:outline-none focus:shadow-outline "
                data-dismiss="modal"
                onClick={onPrevious}
              >
                Previous
              </button>
              <Link to="/">
                <button
                  type="button"
                  className="bg-gray-500 text-white font-bold py-2 px-4 rounded-full hover:bg-gray-600 focus:outline-none focus:shadow-outline"
                >
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity3;
