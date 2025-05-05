import { createWriteStream } from 'node:fs'
import path from 'node:path'
import { stdin } from 'node:process'

const write = async () => {
    const __dirname = import.meta.dirname
    const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt')
    const writeStream = createWriteStream(fileToWrite)

    stdin.pipe(writeStream)
};

await write();