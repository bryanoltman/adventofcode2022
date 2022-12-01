import { promises as fsPromises } from 'fs'

function padLeft (value: number, paddingChar: string, length: number): string {
  let strValue = String(value)
  let padding = paddingChar.repeat(length - strValue.length)
  return padding + strValue
}

async function readInputForDay (day: number): Promise<Array<string>> {
  let path = `${padLeft(day, '0', 2)}/input.txt`
  let fileContents = await fsPromises.readFile(path, 'utf-8')
  return fileContents.split('\n')
}

export { readInputForDay }
