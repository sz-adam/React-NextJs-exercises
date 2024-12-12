import GameBoard from "../components/GameBoard";
import GameOver from "../components/GameOver";
import { useGameContext } from "../context/GameContext";

const Game = () => {
  const { gameOver } = useGameContext();

  return (
    <div>
      {gameOver ? (
        <GameOver />
      ) : (
        <>
          <h1 className="text-center font-semibold mb-3 text-3xl text-slate-300 tracking-wider">
            Tetris Game
          </h1>

          <GameBoard />
        </>
      )}
    </div>
  );
};

export default Game;
