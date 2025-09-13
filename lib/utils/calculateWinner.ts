import { Squares, SquareValue, WinnerResult } from "@/types/game";

const calculateWinner = (squares: Squares): WinnerResult => {
  const winningLines: number[][] = [
    [0, 1, 2], //first row
    [3, 4, 5], //second row
    [6, 7, 8], //third row
    [0, 3, 6], //first column
    [1, 4, 7], //second column
    [2, 5, 8], //third column
    [0, 4, 8], //main diagonal
    [2, 4, 6], //reverse diagonal
  ];

  for (let i:number = 0; i < winningLines.length; i++){
    const [a, b, c] = winningLines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return {
        winner: squares[a],
        line: [a, b, c]
      };
    }
  }
  return {
    winner: null,
    line: []
  };
}

export default calculateWinner;