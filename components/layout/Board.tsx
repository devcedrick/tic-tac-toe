"use client";

import React, { useState } from 'react'
import Square from '../ui/Square';
import { Squares } from '@/types/game';
import calculateWinner from '@/lib/utils/calculateWinner';

interface BoardProps {
  xIsNext: boolean;
  squares: Squares;
  onPlay: (newSquares: Squares) => void;
}

const Board: React.FC<BoardProps> = ({xIsNext, squares, onPlay}) => {
  const handleClick = (index: number) => {
    if(calculateWinner(squares) || squares[index])
      return;

    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? 'X' : 'O';
    onPlay(newSquares);
  };

  return (
      <div className="grid grid-cols-3 grid-rows-3 gap-2.5 w-max h-max p-8 rounded-2xl bg-black/15">
        {
          squares.map((value, index) => (
            <Square 
              key={index}
              value={value}
              onSquareClick={() => handleClick(index)}/>
          ))
        }
    </div>
  )
}

export default Board;
