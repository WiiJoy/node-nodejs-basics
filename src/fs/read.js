import fs from 'fs';
import path from 'path';

const read = async () => {
    const __dirname = import.meta.dirname
    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt')

    fs.readFile(fileToRead, 'utf-8', (err, data) => {
        if (err) throw new Error('FS operation failed')

        console.log(data)
    })
};

await read();