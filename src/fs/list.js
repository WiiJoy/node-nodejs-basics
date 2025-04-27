import fs from 'fs';
import path from 'path';

const list = async () => {
    const __dirname = import.meta.dirname
    const dirPath = path.join(__dirname, 'files')

    fs.readdir(dirPath, (err, files) => {
        if (err) throw new Error('FS operation failed')

        console.log(files)
    })
};

await list();