import fs from 'fs-extra'
import { resolve } from 'path';


const pathResolve = (dir: string) => {
    return resolve(__dirname, dir);
}


const loadRouter = () => {
    const fileList = [];
    const basePath = '../src/pages';
    const modulesDir = fs.readdirSync(pathResolve(basePath));
    modulesDir.forEach((module: string) => {
        let modulesChildsDir = fs.readdirSync(pathResolve(`${basePath}/${module}`));
        if (modulesChildsDir.length > 0) {
            // let config = modulesChildsDir[modulesChildsDir.length - 1];
            // let data = JSON.parse(fs.readFileSync(pathResolve(`${basePath}/${module}/${config}`), "utf-8"));
            // modulesChildsDir.pop();
            modulesChildsDir.forEach((child: string) => {
                let modulesChildsPagesDir = fs.readdirSync(pathResolve(`${basePath}/${module}/${child}`));
                if (modulesChildsPagesDir.length > 0) {
                    modulesChildsPagesDir.forEach((page: string) => {
                        fileList.push({ key: `/${module}/${child}/${page}`})
                        // fileList.push({ key: `/${module}/${child}/${page}`, value: data[child][page] })
                    })
                }
            })
        }
    })

    const routerImportList = []
    const routerList = []
    fileList.forEach(({ key: arr }) => {
        let page = arr.split('/')[3];
        routerImportList.push(`
            import ${page} from '@/pages${arr}/index.vue'
        `)
        routerList.push(`{
            name: '${page}',
            path: '/${page}/',
            component: ${page}
        }`)
    })

    return `
    ${routerImportList.toString().replace(new RegExp(',', "g"), '')}
    export default [${routerList.toString()}]
    `
}


export function routerInject() {
    const virtualFileId = 'router-inject'
    return {
        name: 'router:inject',
        resolveId(id: any) {
            if (id === virtualFileId) {
                return virtualFileId
            }
        },
        load(id: any) {
            if (id === virtualFileId) {
                return loadRouter();
            }
        }
    }
}