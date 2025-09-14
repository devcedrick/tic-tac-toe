"use client"

import { createContext } from "react";
import { useState } from "react";
import { GameStatsValues, History, SquareValue } from "@/types/game";
import { useGameStats } from "@/hooks/useGameStats";

interface GameContextType {
  history: History;
  setHistory: React.Dispatch<React.SetStateAction<History>>;
  gameStats: ReturnType<typeof useGameStats>['gameStats'];
  updateStats: ReturnType<typeof useGameStats>['updateStats'];
  resetStats: ReturnType<typeof useGameStats>['resetStats'];
}

export const GameContext = createContext<GameContextType | undefined>(undefined);

const GameContextProvider = ({children}:{children:React.ReactNode}) => {
  const [history, setHistory] = useState<History>([Array(9).fill(null)]);

  const {gameStats, updateStats, resetStats} = useGameStats();

  const contextValue = {
    history,
    setHistory,
    gameStats,
    updateStats,
    resetStats
  }

  return(
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  )
};


export default GameContextProvider;