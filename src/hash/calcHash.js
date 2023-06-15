import { readFile } from 'node:fs/promises';
import { getDirname } from '../utils/getDirname.js';

const { createHash } = await import('node:crypto');
const {__dirname} = getDirname(import.meta.url)

const calculateHash = async () => {
    const fileContent = await readFile(__dirname + '/files/fileToCalculateHashFor.txt')
    const hash = createHash('sha256')
    const result = hash.update(fileContent).digest('hex')
    
    console.log(result)
};

await calculateHash();