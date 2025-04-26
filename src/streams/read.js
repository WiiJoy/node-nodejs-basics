import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { stdout } from 'process'

const read = async () => {
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt')
    const readStream = fs.createReadStream(fileToRead)

    /**
     * To Reviewers:
     * `npm run streams:read` does't save the result in console
     * use the command `node src/streams/read.js`
     * https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/cross-check-manual.md#how-to-check-students-project
     */
    readStream.pipe(stdout)
};

await read();