import React from 'react'

const MovesList = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='flex flex-col gap-1 px-8'>
      {children}
    </div>
  )
}

export default MovesList
