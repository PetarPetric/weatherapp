import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";
import VueAxios from "vue-axios";

import App from "./App";
import store from "./store";

window.$store = store;

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(Vuex);

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
