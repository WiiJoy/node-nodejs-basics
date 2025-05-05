import { readdir } from 'node:fs';
import path from 'node:path';

const list = async () => {
    const __dirname = import.meta.dirname
    const dirPath = path.join(__dirname, 'files')

    readdir(dirPath, (err, files) => {
        if (err) throw new Error('FS operation failed')

        console.log(files)
    })
};

await list();