import { useGameContext } from "../context/GameContext";

//TODO: Tetrominok létrehozása / véletlenszerű generálása
//TODO: véletlenszerű megjelenítése középen
//TODO: esés
//TODO: mozgatás / forgatás
//TODO: sorok törlése
//TODO: pontozás / megjelenítés
//TODO: következő megjelenítése

const GameBoard: React.FC = () => {
  const { board } = useGameContext();

  return (
    <div className="grid grid-cols-10 gap-0.5 border border-zinc-400">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`w-8 h-8 ${
              cell === "tetromino" ? "bg-blue-600" : "bg-slate-800"
            }  border border-slate-900`}
          ></div>
        ))
      )}
    </div>
  );
};

export default GameBoard;
