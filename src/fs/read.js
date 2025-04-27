import { readFile } from 'node:fs';
import path from 'node:path';

const read = async () => {
    const __dirname = import.meta.dirname
    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt')

    readFile(fileToRead, 'utf-8', (err, data) => {
        if (err) throw new Error('FS operation failed')

        console.log(data)
    })
};

await read();