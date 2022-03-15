import type { App } from 'vue';
import 'app-inject';

export function setupLoader(app: App<Element>) {
    // 加载资源
    if ((window as any).App.device.env === 'dev') {
        (window as any).__APP__ = app;
    }
}