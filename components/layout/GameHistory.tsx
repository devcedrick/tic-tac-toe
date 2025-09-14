import React from 'react'
import GameStats from '../ui/GameStats'
import GameStatsCard from '../ui/GameStatsCard'

const GameHistory = () => {
  return (
    <div className='bg-white w-max h-max p-10 rounded-2xl flex flex-col gap-5 items-center'>
      <h1 className='font-semibold text-lg'>Game History</h1>
      <GameStats>
        <GameStatsCard label="X Wins" value={0} />
        <GameStatsCard label="O Wins" value={0} />
        <GameStatsCard label="Draws" value={0} />
        <GameStatsCard label="Total Games" value={0} />
      </GameStats>
    </div>
  )
}

export default GameHistory
