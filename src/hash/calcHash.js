import { createReadStream } from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto'

const calculateHash = async () => {
    const __dirname = import.meta.dirname
    const fileToRead = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')
    const hash = createHash('sha256')

    const readStream = createReadStream(fileToRead)

    readStream.on('data', (chunk) => {
        hash.update(chunk)
        console.log(hash.digest('hex'))
    })
};

await calculateHash();