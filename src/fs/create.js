import { writeFile } from 'node:fs'
import path from 'node:path'

const create = async () => {
    const __dirname = import.meta.dirname
    writeFile(path.join(__dirname, 'files', 'fresh.txt'), 'I am fresh and young', { flag: 'wx' }, (err) => {
        if (err) throw new Error('FS operation failed')
    })
};

await create();