import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueLazyload from 'vue-lazyload'
import VuePreview from 'vue-preview'
import VueCarousel from 'vue-carousel'
import '@fortawesome/fontawesome-pro/css/all.css'
import VueNumberInput from '@chenfengyuan/vue-number-input'

Vue.use(VueLazyload)
Vue.use(require('vue-moment'))
Vue.use(VuePreview)
Vue.use(VueCarousel)
Vue.use(VueNumberInput)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
