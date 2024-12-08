import React, { createContext, ReactNode, useContext, useState } from "react";
import { GameState } from "../model/GameModel";
import { getRandomTetromino } from "../utils/tetromino";

const defaultState: GameState = {
  board: [],
  tetromino: [],
  position: { row: 0, col: 3 },
  generateBoard: () => [],
  placeTetrominoOnBoard: () => [],
};

const cols = 10;
const rows = 20;

const GameContext = createContext<GameState>(defaultState);

export const GameProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const generateBoard = () => {
    return Array.from({ length: rows }, () => Array(cols).fill(null));
  };

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
    <GameContext.Provider
      value={{
        board: updatedBoard,
        tetromino,
        position,
        generateBoard,
        placeTetrominoOnBoard,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
