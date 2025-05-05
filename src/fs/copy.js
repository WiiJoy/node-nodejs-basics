import { cp } from 'node:fs';
import path from 'node:path';

const copy = async () => {
    const __dirname = import.meta.dirname
    const sourceDir = path.join(__dirname, 'files')
    const targetDir = path.join(__dirname, 'files_copy')

    cp(sourceDir, targetDir, { errorOnExist: true, force: false, recursive: true }, (err) => {
        if (err) throw new Error('FS operation failed')
    })
};

await copy();
