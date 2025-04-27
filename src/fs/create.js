import fs from 'fs'
import path from 'path'

const create = async () => {
    const __dirname = import.meta.dirname
    fs.writeFile(path.join(__dirname, 'files', 'fresh.txt'), 'I am fresh and young', { flag: 'wx' }, (err) => {
        if (err) throw new Error('FS operation failed')
    })
};

await create();