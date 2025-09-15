import { useGameContext } from '@/hooks/useGameContext'
import React from 'react'

const Header = () => {
  const {currentMove} = useGameContext();
  const getPlayerTurn = () => {
    if (currentMove % 2 === 0) return "Player X's Turn"
    else return "Player O's Turn";
  }

  const getTextBgColor = () => {
    if (currentMove % 2 === 0) return "#91F3E4"
    else return "#FCBE9C";
  }

  return (
    <div className='flex flex-col items-center gap-1.5'>
       <h2 className='text-xl font-semibold px-15 py-2 rounded-full shadow-xl'
        style={{
          backgroundColor: getTextBgColor()
        }}>{getPlayerTurn()}</h2>
    </div>
  )
}

export default Header
