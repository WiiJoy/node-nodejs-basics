import { createReadStream, createWriteStream } from 'node:fs'
import path from 'node:path'
import { createUnzip } from 'node:zlib'
import { pipeline } from 'node:stream/promises'

const decompress = async () => {
    const __dirname = import.meta.dirname
    const archiveToDecompress = path.join(__dirname, 'files', 'archive.gz')
    const decompressedFile = path.join(__dirname, 'files', 'fileToCompress.txt')
    const unzip = createUnzip()

    const source = createReadStream(archiveToDecompress)
    const destination = createWriteStream(decompressedFile)

    pipeline(source, unzip, destination, (err) => {
        if (err) console.error(err)
    })
};

await decompress();