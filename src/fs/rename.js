import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'

const rename = async () => {
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    const wrongName = path.join(__dirname, 'files', 'wrongFilename.txt')
    const properName = path.join(__dirname, 'files', 'properFilename.md')

    fs.access(properName, fs.constants.F_OK, (err) => {
        if (err) {
            fs.rename(wrongName, properName, (err) => {
                if (err) throw new Error('FS operation failed')
            })
        } else {
            throw new Error('FS operation failed')
        }
    })
};

await rename();