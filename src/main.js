// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import { currency } from './util/currency.js'
Vue.config.productionTip = false

Vue.user(Vuex);
Vue.use(infiniteScroll)
Vue.use(VueLazyLoad, {
  loading: "/static/loading-svg/loading-bars.svg"
})

Vue.filter("currency", currency); //定义全局过滤器

const store = new Vuex.Store({
	state:{
		nickName:'',
		cartCount:0
	}
})
/* eslint-disable no-new */
new Vue({
  //el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount("#app");
