import _ from 'lodash';
window._ = _;

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import {createApp} from 'vue';

import App from './App.vue';
import router from './vue-router.js';
import VueKonva from 'vue-konva';

const app = createApp(App);
app.use(router);
app.use(VueKonva);
app.mount("#app");
