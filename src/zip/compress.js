import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createGzip } from 'zlib'
import { pipeline } from 'stream'

const compress = async () => {
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt')
    const archiveFile = path.join(__dirname, 'files', 'archive.gz')
    const gzip = createGzip()

    const source = fs.createReadStream(fileToCompress)
    const destination = fs.createWriteStream(archiveFile)

    pipeline(source, gzip, destination, (err) => {
        if (err) console.error(err)
    })
};

await compress();