import { fork } from 'child_process'
import { getDirname } from '../utils/getDirname.js';

const {__dirname} = getDirname(import.meta.url)

const spawnChildProcess = async (args) => {
    const filePath = __dirname + '/files/script.js'
    const childProcess = fork(filePath, args, {silent: true})

    process.stdin.pipe(childProcess.stdin)
    childProcess.stdout.pipe(process.stdout)
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
