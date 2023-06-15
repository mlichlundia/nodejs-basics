import { appendFile } from 'node:fs/promises';
import { getDirname } from '../utils/getDirname.js';
import { ERROR_MESSAGE } from '../constants.js';
import { isTargetExists } from '../utils/isTargetExists.js';

const {__dirname} = getDirname(import.meta.url)

const create = async () => {
    const filePath = __dirname + '/files/fresh.txt'
    const fileContent = 'I am fresh and young'
    
    if(await isTargetExists(filePath)) {
        throw Error(ERROR_MESSAGE)
    } else {
        await appendFile(filePath, fileContent)
    }
};

await create();