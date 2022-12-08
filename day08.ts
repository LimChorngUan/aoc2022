import fs = require("node:fs");
import readline = require("node:readline");

const part1 = (input: number[][]) => {
  let visibleCount = 0;
  const isVisible = (curr: number, neighbours: number[]) => neighbours.every(x => x < curr)

  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
      if(row === 0 || row === input.length - 1 || col === 0 || col === input[row].length - 1) {
        visibleCount +=1
      } else {
        let left = []; let right = []; let top = []; let bottom = [];

        for (let i = col - 1; i >= 0; i--) {
          left.push(input[row][i])
        }
        for (let i = col + 1; i < input[row].length; i++) {
          right.push(input[row][i])
        }
        for (let i = row - 1; i >= 0; i--) {
          top.push(input[i][col])
        }
        for (let i = row + 1; i < input.length; i++) {
          bottom.push(input[i][col])
        }

        const curr = input[row][col]
        
        if([isVisible(curr, left), isVisible(curr, right), isVisible(curr, top), isVisible(curr, bottom)].some(x => x === true)) {
          visibleCount +=1
        }
      }
    }
  }

  console.log('part1:', visibleCount)
}

const part2 = (input: number[][]) => {
  let highestScenicScore = 0;

  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {  
      if(row === 0 || row === input.length - 1 || col === 0 || col === input[row].length - 1) {
        continue;
      } else {  
        const curr = input[row][col];
        let left = 0; let right = 0; let top = 0; let bottom = 0;

        for (let i = col - 1; i >= 0; i--) {
          if (curr > input[row][i]) {
            left += 1
          } else {
            left += 1
            break
          }
        }
        for (let i = col + 1; i < input[row].length; i++) {
          if (curr > input[row][i]) {
            right += 1
          } else {
            right += 1
            break
          }
        }
        for (let i = row - 1; i >= 0; i--) {
          if (curr > input[i][col]) {
            top += 1
          } else {
            top += 1
            break
          }
        }
        for (let i = row + 1; i < input.length; i++) {
          if (curr > input[i][col]) {
            bottom += 1
          } else {
            bottom += 1
            break
          }
        }

        const currScenicScore =  left * right * top * bottom

        if (currScenicScore > highestScenicScore) {
          highestScenicScore = currScenicScore
        }
      }
    }
  }

  console.log('part2:', highestScenicScore)
}

async function run() {
  const fileStream = fs.createReadStream('day08.input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let input = [];

  for await (const line of rl) { 
   input.push(line.split('').map(x => parseInt(x, 10)))
  }

  part1(input)
  part2(input)
}  

run()