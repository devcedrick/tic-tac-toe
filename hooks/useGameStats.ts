import { useState, useEffect, useCallback } from 'react';
import { GameStatsValues, SquareValue } from '@/types/game';
import { saveStatsToLocalStorage, getStatsFromLocalStorage } from '@/lib/utils/localStorage';
import { useGameContext } from './useGameContext';

export const useGameStats = () => {
  const [gameStats, setGameStats] = useState<GameStatsValues>(() => 
    getStatsFromLocalStorage()
  );

  useEffect(() => {
    saveStatsToLocalStorage(gameStats);
  }, [gameStats]);

  const updateStats = useCallback((winner: SquareValue) => {
    setGameStats(prev => {
      const newStats = { 
        ...prev, 
        totalGames: prev.totalGames + 1 
      };
      
      if (winner === 'X') {
        newStats.xScore += 1;
      } else if (winner === 'O') {
        newStats.oScore += 1;
      } else {
        newStats.draw += 1;
      }
      
      return newStats;
    });
  }, []);

  const resetStats = useCallback(() => {
    const defaultStats = {
      xScore: 0,
      oScore: 0,
      draw: 0,
      totalGames: 0
    };
    
    setGameStats(defaultStats);
  }, []);

  return {
    gameStats,
    updateStats,
    resetStats
  };
};