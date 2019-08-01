import Vue from "vue";
import App from "./App.vue";
import VueResourse from "vue-resource";

import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueResourse);
new Vue({
	store,
	render: h => h(App)
}).$mount("#app");
