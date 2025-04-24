import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'

const remove = async () => {
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt')

    fs.rm(fileToRemove, (err) => {
        if (err) throw new Error('FS operation failed')
    })
};

await remove();