type ProxyItem = [string, string];

type ProxyList = ProxyItem[];

export const createProxy = (str: string) => {
  const list: ProxyList = str ? [str.split(',')] : [];
  const ret: any = {};
  for (const [prefix, target] of list) {
    ret[prefix] = {
      target: target,
      changeOrigin: true,
      rewrite: (path: string) => path.replace(new RegExp(`^${prefix}`), ''),
    };
  }
  return ret;
}
