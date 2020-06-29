import React, { useEffect, useState } from 'react'
import Column from './column'

export default function App (): JSX.Element {
  const [state, setState] = useState<number[]>([0, 0, 0, 0, 0, 0])

  useEffect(() => {
    setInterval(() => {
      const date = new Date()
      setState([
        Number(date.getHours().toString().split('')[0]),
        Number(date.getHours().toString().split('')[1]),
        Number(date.getMinutes().toString().split('')[0]),
        Number(date.getMinutes().toString().split('')[1]),
        Number(date.getSeconds().toString().split('')[0]),
        Number(date.getSeconds().toString().split('')[1])
      ])
    }, 100)
  }, [])
  

  return (
    <div className="flex content-center flex-wrap justify-center container mx-auto h-screen">
      {Array(6).fill(0).map((_, index) => <Column key={index} representation={state[index]}/>)}
    </div>
  )
}