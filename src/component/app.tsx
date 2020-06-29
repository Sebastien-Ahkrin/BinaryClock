import React, { useEffect, useState } from 'react'
import Column from './column'

export default function App (): JSX.Element {
  const [state, setState] = useState<number[]>([0, 0, 0, 0, 0])

  useEffect(() => {
    setInterval(() => {
      const date = new Date()
      setState([0, 0, 0, 0, Number(date.getMilliseconds().toString().split('')[0])])
    }, 100)
  }, [])
  

  return (
    <div className="flex content-center flex-wrap justify-center container mx-auto h-screen">
      {Array(5).fill(0).map((_, index) => <Column key={index} representation={state[index]}/>)}
    </div>
  )
}