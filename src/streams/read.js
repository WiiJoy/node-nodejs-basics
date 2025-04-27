import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { stdout } from 'process'

const read = async () => {
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt')
    const readStream = fs.createReadStream(fileToRead)

    readStream.pipe(stdout)

    readStream.on('end', () => {
        stdout.write('\n')
    })
};

await read();