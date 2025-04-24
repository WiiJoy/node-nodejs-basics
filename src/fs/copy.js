import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'

const copy = async () => {
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    const sourceDir = path.join(__dirname, 'files')
    const targetDir = path.join(__dirname, 'files_copy')

    fs.cp(sourceDir, targetDir, { errorOnExist: true, force: false, recursive: true }, (err) => {
        if (err) throw new Error('FS operation failed')
    })
};

await copy();
