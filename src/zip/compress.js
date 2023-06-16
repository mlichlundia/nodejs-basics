import { createReadStream, createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream/promises';
import { createGzip } from 'node:zlib'
import { getDirname } from '../utils/getDirname.js';

const {__dirname} = getDirname(import.meta.url)

const compress = async () => {
    const filePath = __dirname + '/files/fileToCompress.txt' 
    const archPath = __dirname + '/files/archive.gz'

    await pipeline(createReadStream(filePath), createGzip(), createWriteStream(archPath))
};

await compress();