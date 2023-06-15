import { cp } from 'node:fs/promises';
import { getDirname } from '../utils/getDirname.js';
import { ERROR_MESSAGE } from '../constants.js';
import { isTargetExists } from '../utils/isTargetExists.js';

const {__dirname} = getDirname(import.meta.url)

const copy = async () => {
    const directoryPath = __dirname + '/files'
    const copyPath = __dirname + '/files_copy'

    if (await isTargetExists(directoryPath)) {
        try {
            await cp(directoryPath, copyPath, {errorOnExist: true, force: false, recursive: true })
        } catch {
            throw Error(ERROR_MESSAGE)
        }
    } else {
        throw Error(ERROR_MESSAGE)
    }
};

await copy();
