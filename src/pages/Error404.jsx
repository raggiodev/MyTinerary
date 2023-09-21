import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import error404 from "../assets/error404.jpeg";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Error404 = () => {
  const [showGame, setShowGame] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    document.title = "Error 404: MyTinerary";
  }, []);

  useEffect(() => {
    if (!xIsNext && showGame && !winner) {
      // Simular el movimiento de una IA
      const squares = [...board];
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * 9);
      } while (squares[randomIndex]);
      squares[randomIndex] = "O";

      // Actualizar estado del tablero
      setBoard(squares);
      setXIsNext(true);

      // Comprobar si hay ganador después del movimiento de la IA
      const gameWinner = calculateWinner(squares);
      if (gameWinner) {
        setWinner(gameWinner);
      }
    }
  }, [xIsNext, showGame, board, winner]);

  const toggleGame = () => {
    setShowGame(!showGame);
  };

  const handleClick = (index) => {
    if (!showGame || winner || board[index]) {
      return;
    }

    const squares = [...board];
    squares[index] = xIsNext ? "X" : "O";

    // Actualizar estado tablero
    setBoard(squares);
    setXIsNext(!xIsNext);

    // Comprobar si hay ganador después del movimiento del user
    const gameWinner = calculateWinner(squares);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  const renderSquare = (index) => {
    return (
      <button
        className="square bg-white border border-gray-300 p-4 text-3xl font-semibold"
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  let status;
  if (winner) {
    status = `Ganador: ${winner}`;
  } else if (!board.includes(null)) {
    status = "Empate";
  } else {
    status = `Siguiente jugador: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <main className="flex flex-col items-center p-16 h-screen">
      <section className="text-center mb-8">
        <h1 className="text-3xl font-semibold">
          ERROR <span className="text-red-500">404</span>
        </h1>
        <h3 className="text-lg">
          Sorry, the page you´re looking for doesn´t exist
        </h3>
        <NavLink
          to="/"
          className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
        >
          <button className="mt-4 px-6 py-3 border rounded border-gray-400 hover:border-gray-600 bg-transparent cursor-pointer transform hover:scale-105 transition-transform duration-300">
            Go Back Home
          </button>
        </NavLink>
      </section>
      <aside className="min-h-20 h-40 flex justify-center">
        <div className="border-2 p-4 rounded">
          <img
            src={error404}
            alt="ERROR 404 - NOT FOUND"
            className="max-w-full h-auto"
          />
        </div>
      </aside>

      <div className="error-404">
        <div style={{ display: showGame ? "none" : "block" }}>
          <button
            onClick={toggleGame}
            className="bg-transparent border border-black cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            &nbsp;
          </button>
        </div>
        {showGame && (
          <div className="tictactoe-game">
            <div className="status text-xl font-semibold mb-4">{status}</div>
            <div className="board grid grid-cols-3 gap-4">
              {Array.from({ length: 9 }, (_, index) => renderSquare(index))}
            </div>
            {(winner || !board.includes(null)) && (
              <div className="mt-4">
                <button
                  onClick={resetGame}
                  className="px-6 py-3 border rounded border-gray-400 hover:border-gray-600 bg-transparent cursor-pointer transform hover:scale-105 transition-transform duration-300"
                >
                  Reiniciar
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Error404;