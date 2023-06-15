import { rename as fsRename } from 'node:fs/promises';
import { isTargetExists } from '../utils/isTargetExists.js';
import { ERROR_MESSAGE } from '../constants.js';
import { getDirname } from '../utils/getDirname.js';

const {__dirname} = getDirname(import.meta.url)

const rename = async () => {
    const targetPath = __dirname + '/files/wrongFilename.txt'
    const replacePath = __dirname + '/files/properFilename.md'

    console.log(await isTargetExists(targetPath), await isTargetExists(replacePath))

    if(!(await isTargetExists(targetPath)) || (await isTargetExists(replacePath))) {
        throw Error(ERROR_MESSAGE)
    } else {
        await fsRename(targetPath, replacePath)
    }
};

await rename();