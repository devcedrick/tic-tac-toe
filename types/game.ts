export type SquareValue = 'X' | 'O' | null;
export type Squares = SquareValue[];
export type History = Squares[];

export interface WinnerResult{
  winner: SquareValue;
  line: number[];
}

export interface GameStatsValues {
  xScore: number;
  oScore: number;
  draw: number;
  totalGames: number;
}