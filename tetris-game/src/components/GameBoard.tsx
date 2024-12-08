import { useState } from "react";
import { getRandomTetromino } from "../utils/tetromino";

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
  const [board, setBoard] = useState<string[][]>(generateBoard());
  const [tetromino, setTetromino] = useState<number[][]>(getRandomTetromino());
  const [position, setPosition] = useState({ row: 0, col: 3 });

  //táblán elhelyezés
  const placeTetrominoOnBoard = (): string[][] => {
    const newBoard = [...board];

    tetromino.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell) {
          const boardX = position.col + x;
          const boardY = position.row + y;
          //nem lépi-e túl a játékteret
          if (boardY < board.length && boardX < board[0].length) {
            newBoard[boardY][boardX] = "tetromino";
          }
        }
      });
    });

    return newBoard;
  };

  // tábla frissítése
  const updatedBoard = placeTetrominoOnBoard();

  return (
    <div className="grid grid-cols-10 gap-0.5 border border-zinc-400">
      {updatedBoard.map((row, rowIndex) =>
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