import React from 'react'

interface ButtonProps {
  label: string;
  onClick: () => void;
  bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({label, onClick, bgColor = "#C84504"}) => {
  return (
    <div className='px-10 py-3.5 rounded-lg font-semibold cursor-pointer text-white transition-transform duration-400 hover:scale-105' onClick={onClick} 
      style={{backgroundColor : bgColor}}>
      {label}
    </div>
  )
}

export default Button;