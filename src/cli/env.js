const parseEnv = () => {
    const envs = process.env
    const envsArray = []
    Object.keys(envs).forEach((key) => {
        if (key.startsWith('RSS_')) {
            envsArray.push(`${key}=${envs[key]}`)
        }
    })
    console.log(envsArray.join('; '))
    
};

parseEnv();