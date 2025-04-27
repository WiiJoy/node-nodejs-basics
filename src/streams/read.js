import fs from 'fs'
import path from 'path'
import { stdout } from 'process'
import { EOL } from 'os'

const read = async () => {
    const __dirname = import.meta.dirname
    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt')
    const readStream = fs.createReadStream(fileToRead)

    readStream.pipe(stdout)

    readStream.on('end', () => {
        stdout.write(EOL)
    })
};

await read();