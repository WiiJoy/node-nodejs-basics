import fs from 'fs';
import path from 'path';

const remove = async () => {
    const __dirname = import.meta.dirname
    const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt')

    fs.rm(fileToRemove, (err) => {
        if (err) throw new Error('FS operation failed')
    })
};

await remove();