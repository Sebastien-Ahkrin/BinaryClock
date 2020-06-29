export function numberToBinary (num: number): boolean[] {
  const binary = num.toString(2)
  return binary.padStart(4, '0').split('').map(value => value === '1')
}