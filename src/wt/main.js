import os from 'os'
import { getDirname } from '../utils/getDirname.js';
import { Worker } from 'worker_threads';

const {__dirname} = getDirname(import.meta.url)

const promisify = (worker) => {
    return new Promise((res) => {
        worker.on('message', (value) => (res({status: 'resolved', data: value})))
        worker.on('error', () => (res({status: 'error', data: null})))
    })
}

const performCalculations = async () => {
    const filePath = __dirname + '/worker.js'
    const defaultNumber = 10
    const cpuCoresCount = os.cpus().length;
    const promises = []
    
    for (let i = 0; i <= cpuCoresCount; i++) {
        promises.push(promisify(new Worker(filePath, {workerData: defaultNumber + i})))
    }

    Promise.all(promises).then(console.log)
};

await performCalculations();