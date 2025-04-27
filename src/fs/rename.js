import { access, rename, constants } from 'fs';
import path from 'path';

const rename = async () => {
    const __dirname = import.meta.dirname
    const wrongName = path.join(__dirname, 'files', 'wrongFilename.txt')
    const properName = path.join(__dirname, 'files', 'properFilename.md')

    access(properName, constants.F_OK, (err) => {
        if (err) {
            rename(wrongName, properName, (err) => {
                if (err) throw new Error('FS operation failed')
            })
        } else {
            throw new Error('FS operation failed')
        }
    })
};

await rename();