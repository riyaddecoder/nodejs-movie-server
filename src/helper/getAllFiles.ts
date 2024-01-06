import * as fs from 'fs'

interface EachFile {
  name: string
  isDirectory: boolean
}

export const getAllFiles = (dir: string): EachFile[] => {
  const files = fs.readdirSync(dir, { withFileTypes: true })
  return files.map(eachFile => ({
    name: eachFile.name,
    isDirectory: eachFile.isDirectory(),
  }))
}
