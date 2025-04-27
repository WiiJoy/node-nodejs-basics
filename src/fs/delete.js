import { rm } from 'node:fs';
import path from 'node:path';

const remove = async () => {
    const __dirname = import.meta.dirname
    const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt')

    rm(fileToRemove, (err) => {
        if (err) throw new Error('FS operation failed')
    })
};

await remove();