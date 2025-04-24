import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const create = async () => {
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    fs.writeFile(path.join(__dirname, 'files', 'fresh.txt'), 'I am fresh and young', { flag: 'wx' }, (err) => {
        if (err) throw new Error('FS operation failed')
    })
};

await create();