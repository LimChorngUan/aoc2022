export const parse = (input: string): number[][][] => 
  input
    .split('\n')
    .map(line => line.split(',').map(el => el.split('-').map(str => parseInt(str, 10))))

export const part1and2 = (input: number[][][]) =>
  input.reduce((acc, curr) => {
    const x1 = curr[0][0]
    const y1 = curr[0][1]
    const x2 = curr[1][0]
    const y2 = curr[1][1]

    /* Part 1 */
    // if ((x2 >= x1 && y2 <= y1) || (x2 <= x1 && y2 >= y1)) return acc + 1

    /* Part 2 */
    if ((x2 >= x1 && x2 <= y1) || (y2 <= y1 && y2 >= x1) || (x1 >= x2 && x1 <= y2) || y1 >= x2 && y1 <= y2) return acc + 1

    return acc
  }, 0)
