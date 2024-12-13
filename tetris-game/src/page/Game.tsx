import GameBoard from "../components/GameBoard";
import GameOver from "../components/GameOver";
import { useGameContext } from "../context/GameContext";

const Game = () => {
  const { gameOver, score } = useGameContext();

  return (
    <div>
      {gameOver ? (
        <GameOver />
      ) : (
        <>
          <h1 className="text-center font-semibold mb-3 text-3xl text-slate-300 tracking-wider">
            Tetris Game
          </h1>

          <div className="flex">
            <GameBoard />
            <div className="text-white text-3xl text-center m-2">{score}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
