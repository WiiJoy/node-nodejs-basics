import { createReadStream, createWriteStream } from 'node:fs'
import path from 'node:path'
import { createGzip } from 'node:zlib'
import { pipeline } from 'node:stream/promises'

const compress = async () => {
    const __dirname = import.meta.dirname
    const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt')
    const archiveFile = path.join(__dirname, 'files', 'archive.gz')
    const gzip = createGzip()

    const source = createReadStream(fileToCompress)
    const destination = createWriteStream(archiveFile)

    pipeline(source, gzip, destination, (err) => {
        if (err) console.error(err)
    })
};

await compress();