export const parse = (input: string): Array<Array<number>> => {
  return input.split('\n\n').map((x) => {
    return x.split('\n').map(y => {
      return parseInt(y, 10)
    })
  })
}

export const top3Sum = (input: Array<Array<number>>): number => {
  const sums = input.map(x => x.reduce((acc, curr) => acc + curr, 0))

  const top1 = Math.max(...sums);
  const top2 = Math.max(...sums.filter(x => x !== top1))
  const top3 = Math.max(...sums.filter(x => x !== top1 && x!== top2))

  return top1 + top2 + top3
}
