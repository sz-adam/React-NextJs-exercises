import { useGameContext } from "../context/GameContext";

//FIXME: Tetrominok létrehozása / véletlenszerű generálása / random szin
//FIXME: véletlenszerű megjelenítése középen
//TODO: esés
//TODO: mozgatás / forgatás
//TODO: sorok törlése
//TODO: pontozás / megjelenítés
//TODO: következő megjelenítése

const GameBoard: React.FC = () => {
  const { board, color } = useGameContext();

  return (
    <div className="grid grid-cols-10 gap-0.5 border border-zinc-400">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`w-8 h-8 ${
              cell ? color : "bg-slate-800"
            }  border border-slate-900`}
          ></div>
        ))
      )}
    </div>
  );
};

export default GameBoard;
