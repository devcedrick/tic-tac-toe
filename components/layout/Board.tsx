"use client";

import React, { useState } from 'react'
import Square from '../ui/Square';
import { Squares, WinnerResult } from '@/types/game';
import calculateWinner from '@/lib/utils/calculateWinner';

interface BoardProps {
  xIsNext: boolean;
  squares: Squares;
  onPlay: (newSquares: Squares) => void;
  gameOver: boolean;
}

const Board: React.FC<BoardProps> = ({xIsNext, squares, onPlay, gameOver}) => {
  const winRes: WinnerResult = calculateWinner(squares);

  const handleClick = (index: number) => {
    if(gameOver || squares[index])
      return; 

    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? 'X' : 'O';

    onPlay(newSquares);
  };

  const isWinningSquare = (index: number): boolean => winRes.line.includes(index);

  return (
      <div className="grid grid-cols-3 grid-rows-3 gap-2.5 w-max h-max p-8 rounded-2xl bg-black/15">
        {
          squares.map((value, index) => (
            <Square 
              key={index}
              value={value}
              isWinningSquare={isWinningSquare(index)}
              winner={winRes.winner}
              onSquareClick={() => handleClick(index)}
              disabled = {gameOver}/>
          ))
        }
    </div>
  )
}

export default Board;
