import path from 'path'
import { stdout, stdin } from 'process'
import { spawn } from 'child_process'

const spawnChildProcess = async (args) => {
    const __dirname = import.meta.dirname
    const scriptFile = path.join(__dirname, 'files', 'script.js')

    const childProcess = spawn('node', [scriptFile, ...args], {
        stdio: ['pipe', 'pipe', 'pipe']
    })

    stdin.pipe(childProcess.stdin)
    childProcess.stdout.pipe(stdout)
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['hedgehog', 'duck', 'dog', 'cat'] );
