import { createApp } from 'vue';
import { setupLoader } from '@/utils/loader';
import { setupConsole } from '@/utils/console';
import { setupF7 } from '@/utils/framework7';
import { setupStore } from '@/utils/store';
// import { setupComponent } from '@/utils/component';
import App from './App.vue';

const app = createApp(App);
setupF7(app);
setupLoader(app);
setupConsole();
setupStore(app);
// setupComponent(app);

app.mount('#app');

export default app;