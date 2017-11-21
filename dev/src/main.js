// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import {store} from './store';
import Helpers from '@/tools/Helpers';

import "./assets/scss/app.scss";

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    data() {
        return {
            isMobile: Helpers.isMobile()
        }
    },
    created() {
        window.vue = this;

        this.$on('onResize', () => {
            let classList = document.body.classList;
            let mClassName = 'mobile';
            if (Helpers.isMobile()) {
                classList.add(mClassName);
                this.isMobile = true;
            } else {
                classList.remove(mClassName);
                this.isMobile = false;
            }
        })
    },
    components: {App}
});
