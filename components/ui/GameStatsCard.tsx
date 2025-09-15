import React from 'react'

interface GameStatsCardProps {
  label: string;
  value: number;
}

const GameStatsCard: React.FC<GameStatsCardProps> = ({label, value}) => {
  return (
    <div className='bg-[#C8F9F2] rounded-lg p-3 flex flex-col justify-center gap-1.5'>
      <div className='flex flex-1 justify-center text-xl font-semibold' >
        {value}
      </div>
      <div className='flex flex-1 justify-center text-sm text-gray-500'>
        {label}
      </div>
    </div>
  )
}

export default GameStatsCard
