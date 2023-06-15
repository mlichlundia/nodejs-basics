const parseEnv = () => {
    const envString = 
        Object.entries(process.env)
            .filter(envVar => envVar[0].startsWith('RSS_'))
            .map((envVar) => envVar.join('='))
            .join('; ')
            
    console.log(envString)
};

parseEnv();