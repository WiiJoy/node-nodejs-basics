import path from 'path'
import { fileURLToPath } from 'url'
import { availableParallelism } from 'os'
import { Worker } from 'worker_threads'

const performCalculations = async () => {
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    const worker = path.join(__dirname, 'worker.js')
    const allWorkers = []
    const result = []

    const coreCount = availableParallelism()

    for (let i = 0; i < coreCount; i++) {
        const workerElem = new Worker(worker, {
            workerData: 10 + i
        })

        workerElem.on('message', (message) => {
            result[i] = {
                status: 'resolved',
                data: message
            }
        })

        workerElem.on('error', (err) => {
            result[i] = {
                status: 'error',
                data: null
            }
        })

        allWorkers.push(
            new Promise((res) => workerElem.on('exit', res))
        )
    }

    await Promise.all(allWorkers)

    console.log(result)
};

await performCalculations();