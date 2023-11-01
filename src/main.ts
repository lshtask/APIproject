import '@ant-design-vue/pro-layout/dist/style.css';
import 'ant-design-vue/dist/antd.variable.min.css';

import { createApp } from 'vue';
import { ConfigProvider } from 'ant-design-vue';
import NaiveUI from 'naive-ui';
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout';
import router from './router';
import App from './App.vue';
import { setupStore } from './store'

const app =createApp(App)
setupStore(app)
app.use(router).use(NaiveUI).use(ConfigProvider).use(ProLayout).use(PageContainer).mount('#app');
