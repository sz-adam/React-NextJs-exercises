export type Tetromino = number[][];

export interface GameState {
  board: string[][];
  tetromino: Tetromino;
  position: { row: number; col: number };
  generateBoard: () => string[][];
  placeTetrominoOnBoard: () => string[][];
  color: string;
}
