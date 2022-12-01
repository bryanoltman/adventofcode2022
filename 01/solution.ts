import { readInputForDay } from '../shared/readInputForDay'

function sumNumberGroups (lines: Array<string>): Array<number> {
  var groups: Array<number> = []
  var currentGroupSum = 0
  for (let line of lines) {
    if (line.trim().length == 0) {
      groups.push(currentGroupSum)
      currentGroupSum = 0
      continue
    }

    currentGroupSum += Number.parseInt(line)
  }

  groups.push(currentGroupSum)

  return groups
}

function solvePart1 (lines: Array<string>): number {
  let groups = sumNumberGroups(lines)
  return Math.max(...groups)
}

async function runPart1 (): Promise<string> {
  let lines = await readInputForDay(1)
  let solution = solvePart1(lines)
  return String(solution)
}

function solvePart2 (lines: Array<string>): number {
  let groups = sumNumberGroups(lines)
  let topThree = groups.sort((a, b) => a - b).slice(-3)
  return topThree.reduce((accumulator, current) => accumulator + current)
}

async function runPart2 (): Promise<string> {
  let lines = await readInputForDay(1)
  let solution = solvePart2(lines)
  return String(solution)
}

export { runPart1, runPart2, solvePart1, solvePart2 }
