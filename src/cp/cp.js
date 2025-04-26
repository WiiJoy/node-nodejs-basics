import path from 'path'
import { fileURLToPath } from 'url'
import { stdout, stdin } from 'process'
import { spawn } from 'child_process'

const spawnChildProcess = async (args) => {
    const __dirname = fileURLToPath(new URL('.', import.meta.url))
    const scriptFile = path.join(__dirname, 'files', 'script.js')

    const childProcess = spawn('node', [scriptFile, ...args], {
        stdio: ['pipe', 'pipe', 'pipe']
    })

    stdin.pipe(childProcess.stdin)
    childProcess.stdout.pipe(stdout)
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['hedgehog', 'duck', 'dog', 'cat'] );
