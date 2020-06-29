import React, { useEffect, useState } from 'react'
import Column from './column'

function twoDigit (value: string): number {
  return isNaN(Number(value)) ? 0 : Number(value)
}

export default function App (): JSX.Element {
  const [state, setState] = useState<number[]>([0, 0, 0, 0, 0, 0])

  useEffect(() => {
    setInterval(() => {
      const date = new Date()
      setState([
        twoDigit(date.getHours().toString().padStart(2, '0').split('')[0]),
        twoDigit(date.getHours().toString().padStart(2, '0').split('')[1]),
        twoDigit(date.getMinutes().toString().padStart(2, '0').split('')[0]),
        twoDigit(date.getMinutes().toString().padStart(2, '0').split('')[1]),
        twoDigit(date.getSeconds().toString().padStart(2, '0').split('')[0]),
        twoDigit(date.getSeconds().toString().padStart(2, '0').split('')[1])
      ])
    }, 1000)
  }, [])

  return (
    <div className="flex content-center flex-wrap justify-center container mx-auto h-screen">
      {Array(6).fill(0).map((_, index) => <Column key={index} representation={state[index]}/>)}
    </div>
  )
}