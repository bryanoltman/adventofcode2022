import { solvePart1, solvePart2 } from './solution'
import { expect } from 'chai'
import 'mocha'

describe('day 1', function () {
  let testInput = `1000
  2000
  3000
  
  4000
  
  5000
  6000
  
  7000
  8000
  9000
  
  10000`.split('\n')

  it('finds the group with the greatest sum (part 1)', function () {
    let result = solvePart1(testInput)
    expect(result).equals(24000)
  })

  it('returns the sum of the largest three groups (part 2)', function () {
    let result = solvePart2(testInput)
    expect(result).equals(45000)
  })
})
