import React from 'react'
import { SquareValue } from '@/types/game';

interface SquareProps {
  value: SquareValue;
  isWinningSquare: boolean;
  winner: SquareValue
  onSquareClick: () => void;
  disabled: boolean;
}

const Square: React.FC<SquareProps> = ({value, onSquareClick, isWinningSquare, winner, disabled}) => {
  let textColor:string = value === 'X' ? 'text-[#1D9871]' : 'text-[#FB6B23]';
  const getWinningBgColor = () => {
    if(!isWinningSquare) return 'bg-white';
    return winner === 'X' ? 'bg-[#DAFBF7]' : 'bg-[#FED7C3]'
  }

  const getWinningBorder = () => {
    if(!isWinningSquare) return '';
    return winner === 'X' ? 'border border-[#1D9871] border-3' : 'border border-[#FB6B23] border-3';
  }

  const getCursorStyle = () => {
  if (disabled || !!value) {
    return "cursor-not-allowed";
  }
  return "cursor-pointer";
}

  return (
    <button className={`w-[23vw] max-w-30 lg:w-38 lg:max-w-45
      aspect-square 
      rounded-xl 
      ${getWinningBgColor()}
      ${getWinningBorder()}
      text-5xl lg:text-8xl
      font-semibold 
      p-0
      transition-transform duration-200
      hover:scale-102
      ${textColor}
      ${getCursorStyle()}`} onClick={onSquareClick}
      disabled = {disabled || !!value}
      >
      {value}
    </button>
  )
}

export default Square;
