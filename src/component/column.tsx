import React from 'react'
import Line from './line'

import { numberToBinary } from './../utils'

export interface Props {
  representation: number
}

export default function Column (props: Props): JSX.Element {
  const binary: boolean[] = numberToBinary(props.representation)

  return (
    <div className="flex flex-col w-1/6">
      {[1, 2, 4, 8].map((_, index) => <Line key={index} value={props.representation} activated={binary[index]}/>)}
    </div>
  )
}