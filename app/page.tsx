"use client"

import Board from "@/components/layout/Board";
import { useEffect, useState, useRef } from "react";
import { Squares, History } from "@/types/game";
import { useGameContext } from "@/hooks/useGameContext";
import calculateWinner from "@/lib/utils/calculateWinner";
import Button from "@/components/ui/Button";
import GameResultModal from "@/components/layout/GameResultModal";
import Header from "@/components/layout/Header";

export default function Home() {
  //const [hasUpdatedStats, setHasUpdatedStats] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const {history, setHistory, updateStats, currentMove, setCurrentMove, resetBoard, resetStats} = useGameContext();

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
      setShowModal(true);
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

  const onResetStats = ():void => {
    resetBoard();
    resetStats();
  }

  const handlePlayAgain = () => {
    resetBoard();
    setShowModal(false);
  }

  const closeModal = () => {
    setShowModal(false);
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <Header/>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} gameOver={gameOver}/>
      <div className="flex gap-10">
        <Button label="New Game" onClick={resetBoard}/>
        <Button label="Reset Stats" onClick={onResetStats} bgColor="#0C6E5F"/>
      </div>
      <GameResultModal isOpen={showModal} winner={winner} onPlayAgain={handlePlayAgain} onClose={closeModal}/>
    </div>
  );
}
