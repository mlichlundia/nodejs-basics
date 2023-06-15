import { rm } from 'node:fs/promises';
import { getDirname } from '../utils/getDirname.js';
import { ERROR_MESSAGE } from '../constants.js';
import { isTargetExists } from '../utils/isTargetExists.js';

const {__dirname} = getDirname(import.meta.url)

const remove = async () => {
    const filePath = __dirname + '/files/fileToRemove.txt'

    if(await isTargetExists(filePath)) {
        await rm(filePath)
    } else {
        throw Error(ERROR_MESSAGE)
    }
};

await remove();