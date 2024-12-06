import GameBoard from "../components/GameBoard";

const Game = () => {
  const cols = 10;
  const rows = 20;

  const generateBoard = () => {
    return Array.from({ length: rows }, () => Array(cols).fill(null));
  };
  return (
    <div className="min-h-screen bg-slate-600 flex items-center justify-center">
      <div>
        <h1 className="text-center font-semibold mb-3 text-3xl text-slate-300 tracking-wider">
          Tetris Game
        </h1>
        <GameBoard generateBoard={generateBoard} />
      </div>
    </div>
  );
};

export default Game;
