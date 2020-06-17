import 'semantic-ui-css/semantic.min.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import SuiVue from 'semantic-ui-vue'
import store from './store'

Vue.config.productionTip = false

Vue.use(SuiVue);

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
