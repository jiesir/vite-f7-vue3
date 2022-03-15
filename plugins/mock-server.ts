import fs from 'fs-extra'
import { resolve } from 'path';


const pathResolve = (dir: string) => {
    return resolve(__dirname, dir);
}


const resp = (code: string) => {
    try {
        const resString = fs.readFileSync(pathResolve(`../mock/${code}.json`), 'utf-8');
        return `${resString}`
    } catch (err) {
        // 出错了
        return ''
    }
}


export const mock = () => ({
    name: 'mock:server',
    configureServer(server) {
        return () => {
            server.middlewares.use((req, res, next) => {
                if (process.env.ISMOCK) {
                    if (req.url.startsWith('/mock/')) {
                        const arr = req.url.split('/');
                        const mock_name = arr[arr.length - 1];
                        res.end(resp(mock_name.split('.')[0]));
                    } else {
                        next()
                    }
                } else {
                    next()
                }
            })
        }
    }
})