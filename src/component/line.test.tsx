import React from 'react'
import { create } from 'react-test-renderer'

import Line from './line'
import { fail } from 'assert'

test('check if a Line is in a lighted color', () => {
  const component = create(<Line value={1} activated={true} />)

  if (component.toTree() === null) {
    return fail('Component cannot be null')
  }

  const props: any = component.toTree()?.rendered?.props
  const dom: string[] = props.className.split(' ')
    .filter((element: string) => element !== '\n')
    .filter((element: string) => element !== '')
    .map((element: string) => element.replace('\n', ''))

  expect(dom.find(element => element === 'bg-indigo-400')).toEqual('bg-indigo-400')
})

test('check if a Line is isn\'t lighted', () => {
  const component = create(<Line value={1} activated={false} />)

  if (component.toTree() === null) {
    return fail('Component cannot be null')
  }

  const props: any = component.toTree()?.rendered?.props
  const dom: string[] = props.className.split(' ')
    .filter((element: string) => element !== '\n')
    .filter((element: string) => element !== '')
    .map((element: string) => element.replace('\n', ''))

  expect(dom.find(element => element === 'bg-indigo-700')).toEqual('bg-indigo-700')
})