"use client"

import Board from "@/components/layout/Board";
import { useContext, useEffect, useState, useRef } from "react";
import { Squares, History } from "@/types/game";
import { GameContext } from "@/contexts/GameContext";
import { useGameContext } from "@/hooks/useGameContext";
import calculateWinner from "@/lib/utils/calculateWinner";

export default function Home() {
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [hasUpdatedStats, setHasUpdatedStats] = useState(false);
  const {history, setHistory, updateStats} = useGameContext();
  let xIsNext: boolean = currentMove % 2 === 0;
  let currentSquares = history[currentMove];

  const {winner} = calculateWinner(currentSquares);
  const isDraw = !winner && currentSquares.every(square =>
    square !== null
  );
  const gameOver = !!winner || isDraw;

  const hasStatsBeenUpdated = useRef(false);

  useEffect(() => {
    if (gameOver && !hasStatsBeenUpdated.current) {
      updateStats(winner);
      hasStatsBeenUpdated.current = true;
    }
  }, [gameOver, winner, updateStats]);
    
  
  const handlePlay = (newSquares: Squares) => {
    const newHistory: History = [...history.slice(0, currentMove+1), newSquares];
    
    if (hasStatsBeenUpdated.current) {
      hasStatsBeenUpdated.current = false;
    }
    setHistory(newHistory);
    setCurrentMove(newHistory.length-1);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} gameOver={gameOver}/>
    </div>
  );
}
