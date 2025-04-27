import { createReadStream } from 'node:fs'
import path from 'node:path'
import { stdout } from 'node:process'
import { EOL } from 'node:os'

const read = async () => {
    const __dirname = import.meta.dirname
    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt')
    const readStream = createReadStream(fileToRead)

    readStream.pipe(stdout)

    readStream.on('end', () => {
        stdout.write(EOL)
    })
};

await read();