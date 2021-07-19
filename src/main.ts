import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import lang from 'element-plus/lib/locale/lang/pt-br';
import locale from 'element-plus/lib/locale';
import { format } from 'date-fns';

import 'element-plus/lib/theme-chalk/index.css';

locale.use(lang);

const app = createApp(App);

app.use(store).use(router).use(ElementPlus);

app.mount('#app');

app.config.globalProperties.$filters = {
    dateBRFormated(date: Date): string {
        return format(date, 'dd/MM/yyyy');
    },
    dateTimeBRFormated(date: Date): string {
        return format(date, 'dd/MM/yyyy H:mm:ss');
    }
};
