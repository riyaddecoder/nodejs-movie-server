import * as fs from 'fs'

interface EachFile {
  name: string
  isDirectory: boolean
}

const allowedExtensions = ['.mp4', '.avi', '.mkv']

export const getAllFiles = (dir: string): EachFile[] => {
  const files = fs.readdirSync(dir, { withFileTypes: true })
  return files
    .filter(eachFile => {
      const isDirectory = eachFile.isDirectory()
      const isVideoFile = allowedExtensions.some(ext =>
        eachFile.name.toLowerCase().endsWith(ext)
      )
      return isDirectory || isVideoFile
    })
    .map(eachFile => ({
      name: eachFile.name,
      isDirectory: eachFile.isDirectory(),
    }))
}
