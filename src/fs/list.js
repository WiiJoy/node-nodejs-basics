import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'

const list = async () => {
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    const dirPath = path.join(__dirname, 'files')

    fs.readdir(dirPath, (err, files) => {
        if (err) throw new Error('FS operation failed')

        console.log(files)
    })
};

await list();