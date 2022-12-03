const dict = { 
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, 
  k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
  u: 21, v: 22, w: 23, x: 24, y: 25, z: 26,
  A: 27, B: 28, C: 29, D: 30, E: 31, F: 32, G: 33, H: 34, I: 35, J: 36, 
  K: 37, L: 38, M: 39, N: 40, O: 41, P: 42, Q: 43, R: 44, S: 45, T: 46,
  U: 47, V: 48, W: 49, X: 50, Y: 51, Z: 52,
}

export const parse1 = (input: string): Array<Array<string>> =>
  input.split('\n').map(str => {
    const first = str.substring(0, str.length/2)
    const second = str.substring(str.length/2, str.length)

    return [first, second]
  })

export const part1 = (input: string[][]) => {
  const intersect = (arr1, arr2) => arr1.filter(x1 => arr2.indexOf(x1) !== -1 )

  return input
    .map(x => intersect(x[0].split(''), x[1].split(''))[0])
    .reduce((acc, curr) => acc + dict[curr], 0)
}
  