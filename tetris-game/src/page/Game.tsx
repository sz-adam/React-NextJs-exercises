import GameBoard from "../components/GameBoard";

const Game = () => {
  return (
    <div>
      <h1 className="text-center font-semibold mb-3 text-3xl text-slate-300 tracking-wider">
        Tetris Game
      </h1>
      <GameBoard />
    </div>
  );
};

export default Game;
