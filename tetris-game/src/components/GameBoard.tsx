import { useState } from "react";

interface GameBoardprops {
  generateBoard: () => string[][];
}

  //TODO: Tetrominok létrehozása / véletlenszerű generálása 
  //TODO: véletlenszerű megjelenítése középen
  //TODO: esés
  //TODO: mozgatás / forgatás
  //TODO: sorok törlése
  //TODO: pontozás / megjelenítés
  //TODO: következő megjelenítése 

const GameBoard: React.FC<GameBoardprops> = ({ generateBoard }) => {
  const [board, setBoard] = useState(generateBoard());

  return (
    <div className="grid grid-cols-10 gap-0.5 border border-zinc-400">
      {board.map((row, rowIndex) =>
        row.map((_, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="w-8 h-8 bg-slate-800 border border-slate-900"
          ></div>
        ))
      )}
    </div>
  );
};

export default GameBoard;
