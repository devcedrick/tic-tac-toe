import { SquareValue } from '@/types/game';
import React from 'react'

interface MovesProps {
  nthMove: number;
  value: SquareValue;
  coordinates: string;
  isSelected: boolean;
  onClick: () => void;
}

const Moves: React.FC<MovesProps> = ({nthMove, value, coordinates, isSelected, onClick}) => {
  return (
    <div 
      className={`flex items-center justify-evenly py-2 px-0 rounded-lg cursor-pointer transition-colors bg-[#C8F9F2] gap-2  ${
        isSelected ? '!bg-[#5AEDD7] font-semibold' : 'hover:bg-[#91F3E4]'
      } hover:translate-x-1.5 transition-transform duration-400 transform-colors text-sm grid grid-cols-[1fr_3fr_1fr]`}
      onClick={onClick}
    >
      <p className="w-full text-center">{nthMove}</p>
      <p className="w-full text-center">{value || 'Game Started'}</p>
      <p className="w-full text-center">{coordinates}</p>
    </div>
  )
}

export default Moves;