const ShapeDict = {
  A: 0,
  B: 1,
  C: 2,
  X: 0,
  Y: 1,
  Z: 2,
}

const part2Dict = {
  'A X': 3,
  'B X': 1,
  'C X': 2,
  'A Y': 4,
  'B Y': 5,
  'C Y': 6,
  'A Z': 8,
  'B Z': 9,
  'C Z': 7,
}

export const parsePart1 = (input: string): Array<Array<number>> => 
  input.split('\n').map(x => x.split(' ').map(shape => ShapeDict[shape]))

export const scorePart1 = (input: Array<Array<number>>) => {
  return input.reduce((acc, curr) => {
    const op = curr[0]
    const me = curr[1]

    const baseScore = acc + me + 1;

    if (op === me) return baseScore + 3;
    if ((op + 1) % 3 === me) return baseScore + 6;
    return baseScore
  }, 0)
}

export const scorePart2 = (input: string) => 
  input
    .split('\n')
    .reduce((acc, curr) => acc + part2Dict[curr], 0)