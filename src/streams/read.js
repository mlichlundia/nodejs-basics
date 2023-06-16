import { createReadStream } from 'node:fs';
import process from 'node:process';
import { getDirname } from '../utils/getDirname.js';

const {__dirname} = getDirname(import.meta.url)

const read = async () => {
    const readFilePath = __dirname + '/files/fileToRead.txt'
    const stream = createReadStream(readFilePath)
    
    stream.pipe(process.stdout)
};

await read();