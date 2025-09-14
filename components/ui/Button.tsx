import React from 'react'

interface ButtonProps {
  label: string;
  onClick: () => void;
  bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({label, onClick, bgColor = "#FB6B23"}) => {
  return (
    <div className='px-10 py-3.5 bg-[${bgColor}] rounded-lg font-semibold text-white cursor-pointer' onClick={onClick} style={{backgroundColor : bgColor}}>
      {label}
    </div>
  )
}

export default Button;
