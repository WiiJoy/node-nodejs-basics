import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { stdin } from 'process'

const write = async () => {
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt')
    const writeStream = fs.createWriteStream(fileToWrite)

    stdin.pipe(writeStream)
};

await write();