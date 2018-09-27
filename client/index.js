import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import createRouter from './config/router';
import createStore from './store/store';

import "./assets/styles/global.scss";

Vue.use(VueRouter);
Vue.use(Vuex);

const router = createRouter();
const store = createStore();
// Global Guards
new Vue({
    el: '#root',
    render(h){return h(App)},
    router,
    store
});
