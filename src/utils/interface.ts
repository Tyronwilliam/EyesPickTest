export interface Position {
  x: number;
  y: number;
  z: number;
}

export interface MazeDimensions {
  N: number;
  M: number;
  K: number;
}
export type MazeCell = number[][][];

export type SolveMazePayload = {
  maze: MazeCell;
  start: [number, number, number];
  stop: [number, number, number];
};

export type FormEvent = React.FormEvent<HTMLFormElement>;
