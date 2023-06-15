import { readFile } from 'node:fs/promises';
import { getDirname } from '../utils/getDirname.js';
import { ERROR_MESSAGE } from '../constants.js';
import { isTargetExists } from '../utils/isTargetExists.js';

const {__dirname} = getDirname(import.meta.url)

const read = async () => {
    const filePath = __dirname + '/files/fileToRead.txt'
    
    if(await isTargetExists(filePath)) {
        const fileContent = await readFile(filePath, {encoding: 'utf-8'})
        console.log(fileContent)
    } else {
        throw Error(ERROR_MESSAGE)
    }
};

await read();