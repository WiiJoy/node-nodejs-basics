import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'

const read = async () => {
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt')

    fs.readFile(fileToRead, 'utf-8', (err, data) => {
        if (err) throw new Error('FS operation failed')

        console.log(data)
    })
};

await read();