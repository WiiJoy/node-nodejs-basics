import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createUnzip } from 'zlib'
import { pipeline } from 'stream'

const decompress = async () => {
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    const archiveToDecompress = path.join(__dirname, 'files', 'archive.gz')
    const decompressedFile = path.join(__dirname, 'files', 'fileToCompress.txt')
    const unzip = createUnzip()

    const source = fs.createReadStream(archiveToDecompress)
    const destination = fs.createWriteStream(decompressedFile)

    pipeline(source, unzip, destination, (err) => {
        if (err) console.error(err)
    })
};

await decompress();