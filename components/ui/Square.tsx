import React from 'react'
import { SquareValue } from '@/types/game';

interface SquareProps {
  value: SquareValue;
  onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({value, onSquareClick}) => {
  let textColor:string = value === 'X' ? 'text-[#1D9871]' : 'text-[#FB6B23]';
  return (
    <button className={`w-50 
      aspect-square 
      rounded-xl 
      cursor-pointer 
      bg-white
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
