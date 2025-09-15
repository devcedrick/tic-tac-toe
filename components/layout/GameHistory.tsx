"use client"

import React, { useEffect, useState } from 'react'
import GameStats from '../ui/GameStats'
import GameStatsCard from '../ui/GameStatsCard'
import { useGameContext } from '@/hooks/useGameContext'
import MovesList from '../ui/MovesList'
import Moves from '../ui/Moves'

const GameHistory = () => {
  const { gameStats, history, currentMove, jumpTo } = useGameContext();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getCoordinates = (moveIndex: number): string => {
    if (moveIndex === 0) return ' ';
    
    const previousSquares = history[moveIndex - 1];
    const currentSquares = history[moveIndex];
    
    for (let i = 0; i < currentSquares.length; i++) {
      if (currentSquares[i] !== previousSquares[i]) {
        const row = Math.floor(i / 3) + 1;
        const col = (i % 3) + 1;
        return `(${row},${col})`;
      }
    }
    return ' ';
  };

  return (
    <div className='bg-white w-90 h-max py-8 rounded-2xl flex flex-col gap-3 items-center overflow-hidden'>
      <h1 className='font-semibold text-lg'>Game History</h1>
      {
        !isClient ?
        <div>Loading...</div> :
        <div className='h-120 w-full grid grid-rows-[2fr_1fr] gap-3'>
          <div className='overflow-y-auto scrollbar py-1'>
            {
              currentMove === 0 ?
              <div className='h-full flex items-center justify-center text-3xl font-semibold text-gray-300'>
                No moves yet.
              </div> :
              <MovesList >
              {history.map((_, index) => (
                <Moves 
                  key={index}
                  nthMove={index}
                  value={index === 0 ? null : index % 2 === 1 ? 'X' : 'O'}
                  coordinates={getCoordinates(index)}
                  isSelected={index === currentMove}
                  onClick={() => jumpTo(index)}
                />
              ))}
            </MovesList>
            }
          </div>

          <div className='px-8'>
            <GameStats>
              <GameStatsCard label="X Wins" value={gameStats.xScore} />
              <GameStatsCard label="O Wins" value={gameStats.oScore} />
              <GameStatsCard label="Draws" value={gameStats.draw} />
              <GameStatsCard label="Total Games" value={gameStats.totalGames} />
            </GameStats>
          </div>
        </div>
      }
    </div>
  )
}

export default GameHistory
