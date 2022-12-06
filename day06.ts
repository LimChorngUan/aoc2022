import fs = require("node:fs");
import readline = require("node:readline");

const findMarkerPos = (index: number, line: string) => {
  // const distinctCharSize = 4 // part 1
  const distinctCharSize = 14 // part 2

  const set = new Set(line.slice(index, index + distinctCharSize))

  if (set.size === distinctCharSize) {
    console.log('position:', index + distinctCharSize)
  } else {
    findMarkerPos(index + 1, line)
  }
} 

async function run() {
  const fileStream = fs.createReadStream('day06.input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    findMarkerPos(0, line)
  }
}  

run()