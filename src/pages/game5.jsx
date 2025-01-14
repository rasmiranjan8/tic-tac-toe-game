import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa6";

const Game5 = () => {
  const [isPlayer1, setisPlayer1] = useState(true);
  const [player1Moves, setPlayer1Moves] = useState([]); // Track Player 1's moves
  const [player2Moves, setPlayer2Moves] = useState([]); // Track Player 2's moves
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  // Define winning combinations for a 5x5 grid
  const winning = [
    // Horizontal Wins
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],

    // Vertical Wins
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [5, 10, 15, 20, 25],

    // Diagonal Wins (Top-left to Bottom-right)
    [1, 7, 13, 19, 25],
    // Diagonal Wins (Top-right to Bottom-left)
    [5, 9, 13, 17, 21],
  ];

  const checkWinner = (playerMoves) => {
    return winning.some((combo) =>
      combo.every((index) => playerMoves.includes(index))
    );
  };

  const handlebtnclick = (index) => {
    // Check if the cell is already occupied
    if (player1Moves.includes(index) || player2Moves.includes(index)) return;

    // Update the moves for the current player
    if (isPlayer1) {
      setPlayer1Moves((prevMoves) => [...prevMoves, index]);
    } else {
      setPlayer2Moves((prevMoves) => [...prevMoves, index]);
    }

    // Switch to the other player
    setisPlayer1(!isPlayer1);
  };

  // Check for winner after every move
  useEffect(() => {
    if (checkWinner(player1Moves)) {
      setGameOver(true);
      setWinner(1);
      setPlayer1Score((prevScore) => prevScore + 1);
    } else if (checkWinner(player2Moves)) {
      setGameOver(true);
      setWinner(2);
      setPlayer2Score((prevScore) => prevScore + 1);
    }
  }, [player1Moves, player2Moves]); // Re-run when moves change

  const restartGame = () => {
    setPlayer1Moves([]);
    setPlayer2Moves([]);
    setWinner(null);
    setGameOver(false);
    setisPlayer1(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-300 to-purple-400 text-gray-800">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Play 5x5 Tic Tac Toe Game
        </h1>
        {winner && (
          <h2 className="text-xl text-center md:text-2xl font-bold mt-2">
            Player {winner} Wins!
          </h2>
        )}
        {!winner && !gameOver && (
          <h2 className="text-xl md:text-2xl font-bold mt-2 text-center">
            Player {isPlayer1 ? 1 : 2}'s Turn
          </h2>
        )}
        {gameOver && !winner && (
          <h2 className="text-xl md:text-2xl font-bold mt-2 text-center text-gray-700">
            It's a Draw!
          </h2>
        )}
      </div>
      <div className="grid grid-cols-5 gap-1 w-full max-w-lg bg-black rounded-lg shadow-md">
        {[...Array(25)].map((_, index) => (
          <div
            onClick={() => handlebtnclick(index + 1)}
            key={index}
            className="border border-gray-300 flex items-center justify-center aspect-square bg-gray-100 text-3xl font-bold hover:cursor-pointer hover:bg-gray-200"
          >
            {player1Moves.includes(index + 1) ? <RxCross2 size={40} /> : null}
            {player2Moves.includes(index + 1) ? (
              <FaRegCircle size={40} />
            ) : null}
          </div>
        ))}
      </div>
      <button
        onClick={restartGame}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        {player1Moves.length + player2Moves.length > 0 ? "Restart" : "New Game"}
      </button>
      <div className="flex flex-col md:flex-row md:space-x-6 text-lg text-center space-y-2 md:space-y-0">
        <p
          className={`font-semibold ${
            player1Score > player2Score
              ? "text-green-900"
              : player1Score < player2Score
              ? "text-red-600"
              : "text-gray-700"
          }`}
        >
          Player 1 Score: {player1Score}
        </p>
        <p
          className={`font-semibold ${
            player2Score > player1Score
              ? "text-green-900"
              : player2Score < player1Score
              ? "text-red-600"
              : "text-gray-700"
          }`}
        >
          Player 2 Score: {player2Score}
        </p>
      </div>
    </div>
  );
};

export default Game5;
