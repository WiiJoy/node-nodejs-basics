import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto'

const calculateHash = async () => {
    const __dirname = import.meta.dirname
    const fileToRead = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')
    const hash = createHash('sha256')

    const readStream = fs.createReadStream(fileToRead)

    readStream.on('data', (chunk) => {
        hash.update(chunk)
        console.log(hash.digest('hex'))
    })
};

await calculateHash();