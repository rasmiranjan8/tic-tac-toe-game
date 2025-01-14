import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate=useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 to-blue-400 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Welcome to Tic Tac Toe!</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        Enjoy playing the classic Tic Tac Toe game with different grid sizes.
        Choose your preferred grid size below to get started!
      </p>
      <div className="flex flex-col space-y-4">
        <button onClick={()=>navigate("/game3")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-lg">
          Play in 3x3 Grid
        </button>
        <button onClick={()=>navigate("/game4")} className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded shadow-lg">
          Play in 4x4 Grid
        </button>
        <button onClick={()=>navigate("/game5")} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded shadow-lg">
          Play in 5x5 Grid
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
