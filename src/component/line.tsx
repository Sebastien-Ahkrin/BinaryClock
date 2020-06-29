import React from 'react'

interface Props {
  value: number
  activated: boolean
}

export default function Line (props: Props): JSX.Element {
  return (
    <div 
      className={`
        h-12 text-gray-700 text-center px-4 py-0.5 m-1 
        ${props.activated ? 'bg-indigo-400' : 'bg-indigo-700'}
      `}
    >
    </div>
  )
}