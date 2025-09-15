"use client"

import { createContext } from "react";
import { useState } from "react";
import { GameStatsValues, History, SquareValue } from "@/types/game";
import { useGameStats } from "@/hooks/useGameStats";

interface GameContextType {
  history: History;
  setHistory: React.Dispatch<React.SetStateAction<History>>;
  currentMove: number;
  setCurrentMove: React.Dispatch<React.SetStateAction<number>>;
  gameStats: ReturnType<typeof useGameStats>['gameStats'];
  updateStats: ReturnType<typeof useGameStats>['updateStats'];
  resetStats: ReturnType<typeof useGameStats>['resetStats'];
  jumpTo: (move: number) => void;
  resetBoard: () => void;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);

const GameContextProvider = ({children}:{children:React.ReactNode}) => {
  const [history, setHistory] = useState<History>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const {gameStats, updateStats, resetStats} = useGameStats();

  const jumpTo = (move: number) => {
    setCurrentMove(move);
  };

  const resetBoard = ():void => {
    setCurrentMove(0);
  }

  const contextValue = {
    history,
    setHistory,
    currentMove,
    setCurrentMove,
    gameStats,
    updateStats,
    resetStats,
    jumpTo, 
    resetBoard
  }

  return(
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  )
};


export default GameContextProvider;