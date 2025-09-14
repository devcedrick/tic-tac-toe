"use client"

import Board from "@/components/layout/Board";
import { useEffect, useState, useRef } from "react";
import { Squares, History } from "@/types/game";
import { useGameContext } from "@/hooks/useGameContext";
import calculateWinner from "@/lib/utils/calculateWinner";
import Button from "@/components/ui/Button";

export default function Home() {
  //const [hasUpdatedStats, setHasUpdatedStats] = useState(false);
  const {history, setHistory, updateStats, currentMove, setCurrentMove, resetStats} = useGameContext();
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
    if(gameOver) return;

    const newHistory: History = [...history.slice(0, currentMove+1), newSquares];
    
    if (hasStatsBeenUpdated.current) {
      hasStatsBeenUpdated.current = false;
    }
    setHistory(newHistory);
    setCurrentMove(newHistory.length - 1);
  };

  const resetBoard = ():void => {
    setCurrentMove(0);
  }

  const onResetStats = ():void => {
    resetBoard();
    resetStats();
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} gameOver={gameOver}/>
      <div className="flex gap-10">
        <Button label="New Game" onClick={resetBoard}/>
        <Button label="Reset Stats" onClick={onResetStats} bgColor="#1D9871"/>
      </div>
    </div>
  );
}
