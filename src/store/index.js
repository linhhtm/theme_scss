import Vue from "vue";
import Vuex from "vuex";
import alert from './alert';
import auth from './modules/auth';
import loader from './loader';
import panel from './modules/panel';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alert,
    loader,

    panel,
    auth,
  },
});
