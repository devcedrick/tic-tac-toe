import { GameStatsValues } from '@/types/game';

const STORAGE_KEY = 'tic-tac-toe-stats';

export const saveStatsToLocalStorage = (gameStats: GameStatsValues): void => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(gameStats));
    }
  } catch (error) {
    console.error('Failed to save scores to localStorage:', error);
  }
};

export const getStatsFromLocalStorage = (): GameStatsValues => {
  try {
    if (typeof window !== 'undefined') {
      const storedScores = localStorage.getItem(STORAGE_KEY);
      if (storedScores) {
        return JSON.parse(storedScores);
      }
    }
  } catch (error) {
    console.error('Failed to retrieve scores from localStorage:', error);
  }
  
  return {
    xScore: 0,
    oScore: 0,
    draw: 0,
    totalGames: 0
  };
};
