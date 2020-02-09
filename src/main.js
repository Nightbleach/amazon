import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueLazyload from 'vue-lazyload'
import VuePreview from 'vue-preview'

Vue.use(VueLazyload)
Vue.use(require('vue-moment'))
Vue.use(VuePreview)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
