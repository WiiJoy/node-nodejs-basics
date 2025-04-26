import { stdout, stdin } from 'process'
import { Transform, pipeline } from 'stream'


const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            const reversedChunk = chunk.toString().split('').reverse().join('')
            callback(null, reversedChunk)
        }
    })

    pipeline(stdin, reverse, stdout, (err) => console.error(err))
};

await transform();