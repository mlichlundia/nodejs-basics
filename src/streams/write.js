import { createWriteStream } from 'node:fs';
import { getDirname } from '../utils/getDirname.js';

const {__dirname} = getDirname(import.meta.url)

const write = async () => {
    const filePath = __dirname + '/files/fileToWrite.txt'
    const stream = createWriteStream(filePath)

    process.stdin.pipe(stream)
};

await write();