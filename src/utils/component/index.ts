import type { App } from 'vue';
import Components from '@components/'
import '@components/index.css';

export function setupComponent(app: App<Element>) {
    // 加载外部组件库
    app.use(Components);
}