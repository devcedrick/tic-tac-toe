"use client"

import Image from "next/image";
import Board from "@/components/layout/Board";
import { useState } from "react";
import { Squares, History } from "@/types/game";

export default function Home() {
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [history, setHistory] = useState<History>([Array(9).fill(null)]);
  let xIsNext: boolean = currentMove % 2 === 0;
  let currentSquares = history[currentMove];

  const handlePlay = (newSquares: Squares) => {
    const newHistory: History = [...history.slice(0, currentMove+1), newSquares];
    setHistory(newHistory);
    setCurrentMove(newHistory.length-1);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
    </div>
  );
}
