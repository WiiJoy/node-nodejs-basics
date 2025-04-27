import fs from 'fs'
import path from 'path'
import { stdin } from 'process'

const write = async () => {
    const __dirname = import.meta.dirname
    const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt')
    const writeStream = fs.createWriteStream(fileToWrite)

    stdin.pipe(writeStream)
};

await write();