const parseArgs = () => {
    const args = process.argv

    const argsArray = []
    args.forEach((arg, i) => {
        if (arg.startsWith('--')) {
            argsArray.push(`${arg.slice(2)} is ${args[i + 1]}`)
        }
    })

    console.log(argsArray.join(', '))
};

parseArgs();