import { createReadStream, createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream/promises';
import { createGunzip } from 'node:zlib'
import { getDirname } from '../utils/getDirname.js';

const {__dirname} = getDirname(import.meta.url)

const decompress = async () => {
    const filePath = __dirname + '/files/fileToCompress.txt' 
    const archPath = __dirname + '/files/archive.gz'

    await pipeline(createReadStream(archPath), createGunzip(), createWriteStream(filePath))
};

await decompress();