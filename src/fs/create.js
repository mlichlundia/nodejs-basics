import { access, appendFile, constants } from 'node:fs/promises';
import { getDirname } from '../utils/getDirname.js';

const {__dirname} = getDirname(import.meta.url)

const create = async () => {
    const filePath = __dirname + '/files/fresh.txt'
    const fileContent = 'I am fresh and young'
    const errorMessage = 'FS operation failed'
    
    let isFileExists

    try {
        await access(filePath, constants.F_OK)
        isFileExists = true
    } catch {
        isFileExists = false
    }
    
    if(isFileExists) {
        throw Error(errorMessage)
    } else {
        await appendFile(filePath, fileContent)
    }
};

await create();