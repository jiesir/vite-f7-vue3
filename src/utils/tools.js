export function camelize(str) {
    const camelizeRE = /-(\w)/g;
    return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}


export function uuid() {
    const hexList = [];
    for (let i = 0; i <= 15; i++) {
        hexList[i] = i.toString(16);
    }
    let uuid = '';
    for (let i = 1; i <= 36; i++) {
        if (i === 9 || i === 14 || i === 19 || i === 24) {
            uuid += '-';
        } else if (i === 15) {
            uuid += 4;
        } else if (i === 20) {
            uuid += hexList[(Math.random() * 4) | (0 + 8)];
        } else {
            uuid += hexList[(Math.random() * 16) | 0];
        }
    }
    return uuid.replace(/-/g, '');
}


export function parseParams(url) {
    const urlStr = url.split('?')[1];
    const arrs = (urlStr || '').split('&') || [];
    let params = {}
    arrs.forEach(arr => {
        let keyPair = arr.split('=') || []
        if(keyPair[0]){
            params[decodeURIComponent(keyPair[0])] = decodeURIComponent(keyPair[1] || '')
        }
    });
    return params
}