import './httpHandle'

import AdminLayout from './views/layout/Admin.vue';
import App from "./App.vue";
import AuthLayout from './views/layout/Auth.vue';
import FlagIcon from 'vue-flag-icon';
import Vue from "vue";
import i18n from "./i18n";
import router from "./router";
import store from "./store";
import vuelidate from 'vuelidate';
import vuetify from "./plugins/vuetify";

Vue.use(FlagIcon);
Vue.use(vuelidate);
Vue.config.productionTip = false;

Vue.component('admin-layout', AdminLayout);
Vue.component('auth-layout', AuthLayout);

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");