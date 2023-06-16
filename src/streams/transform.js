import {Transform} from 'stream' 
import {pipeline} from 'stream/promises'

const reverse = (str) => str.toString().split('').reverse().join('')

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, reverse(chunk))
        }
    })

    pipeline(process.stdin, transformStream, process.stdout)
};

await transform();