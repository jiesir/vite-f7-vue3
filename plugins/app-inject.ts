
import { getEnv } from '../src/utils/loader/env'
import pkg from '../package.json'

getEnv(process.env.VITE_ENV)

const loadApp = (str: string) => {
    const content = `
        window.App = {
            params: null,
            device: {
                version: '${pkg.version}',
                env: '${str}',
                isApp: navigator.userAgent.indexOf('Client') != -1,
                os: navigator.userAgent.indexOf('iPhone') > -1 ? 'ios' : 'android'
            },
            ismock: ${process.env.ISMOCK ? process.env.ISMOCK : false},
            home: '${process.env.HOME}',
            rpc_link: '${process.env.RPC_LINK}'
    }
    `
    return `export default ${content}`
}


export function appInject() {
    const virtualFileId = 'app-inject'
    return {
        name: 'app:inject',
        resolveId(id: any) {
            if (id === virtualFileId) {
                return virtualFileId
            }
        },
        load(id: any) {
            if (id === virtualFileId) {
                return loadApp(process.env.VITE_ENV);
            }
        }
    }
}