import { readdir } from 'node:fs/promises';
import { getDirname } from '../utils/getDirname.js';
import { ERROR_MESSAGE } from '../constants.js';
import { isTargetExists } from '../utils/isTargetExists.js';

const {__dirname} = getDirname(import.meta.url)

const list = async () => {
    const directoryPath = __dirname + '/files'

    if(await isTargetExists(directoryPath)) {
        const list = await readdir(directoryPath)
        console.log(list)
    } else {
        throw Error(ERROR_MESSAGE)
    }
};

await list();