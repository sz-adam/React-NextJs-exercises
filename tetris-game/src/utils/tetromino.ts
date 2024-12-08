import { Tetromino } from "../model/GameModel";

export const getRandomTetromino = (): Tetromino => {
  const shapes: Tetromino[] = [
    [
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ], // I
    [
      [1, 1],
      [1, 1],
    ], // O
    [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ], // T
    [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
    ], // J
    [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ], // L
    [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ], // S
    [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ], // Z
  ];

  return shapes[Math.floor(Math.random() * shapes.length)];
};
