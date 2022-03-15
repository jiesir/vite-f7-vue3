import type { App } from 'vue';
import Framework7 from 'framework7/lite-bundle';
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';
import 'framework7/framework7-bundle.css';
import 'framework7-icons/css/framework7-icons.css';

export function setupF7(app: App<Element>) {
    Framework7.use(Framework7Vue);
    registerComponents(app);
}