import React from 'react'
import { SquareValue } from '@/types/game';

interface SquareProps {
  value: SquareValue;
  isWinningSquare: boolean;
  winner: SquareValue
  onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({value, onSquareClick, isWinningSquare, winner}) => {
  let textColor:string = value === 'X' ? 'text-[#1D9871]' : 'text-[#FB6B23]';
  const getWinningBgColor = () => {
    if(!isWinningSquare) return 'bg-white';
    return winner === 'X' ? 'bg-[#DAFBF7]' : 'bg-[#FED7C3]'
  }

  const getWinningBorder = () => {
    if(!isWinningSquare) return '';
    return winner === 'X' ? 'border border-[#1D9871] border-3' : 'border border-[#FB6B23] border-3';
  }

  return (
    <button className={`w-50 
      aspect-square 
      rounded-xl 
      cursor-pointer 
      ${getWinningBgColor()}
      ${getWinningBorder()}
      text-8xl
      font-semibold 
      p-0
      hover:scale-102
      ${textColor}`} onClick={onSquareClick}
      >
      {value}
    </button>
  )
}

export default Square;
