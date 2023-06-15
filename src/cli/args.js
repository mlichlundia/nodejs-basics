const parseArgs = () => {
    const prefix = '--'
    const result = process.argv
        .reduce((res, arg, i, arr) => {
            if(!arg.startsWith(prefix)) {
                return res
            }

            res = [...res, `${arg.replace(prefix, '')} is ${arr[i + 1]}`]
            return res
        }, [])
        .join(', ')

    console.log(result)
};

parseArgs();