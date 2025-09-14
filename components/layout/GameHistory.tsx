"use client"

import React, { useEffect, useState } from 'react'
import GameStats from '../ui/GameStats'
import GameStatsCard from '../ui/GameStatsCard'
import { useGameContext } from '@/hooks/useGameContext'

const GameHistory = () => {
  const { gameStats } = useGameContext();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className='bg-white w-90 h-max p-10 rounded-2xl flex flex-col gap-5 items-center '>
      <h1 className='font-semibold text-lg'>Game History</h1>
      {
        !isClient ?
        <div>Loading...</div> :
          <GameStats>
          <GameStatsCard label="X Wins" value={gameStats.xScore} />
          <GameStatsCard label="O Wins" value={gameStats.oScore} />
          <GameStatsCard label="Draws" value={gameStats.draw} />
          <GameStatsCard label="Total Games" value={gameStats.totalGames} />
      </GameStats>
      }
    </div>
  )
}

export default GameHistory
