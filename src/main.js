// Import Semantic Ui SCSS
import '../public/dist/semantic.min.css'
import '@/styles/main.sass'

// Import Semantic Ui Basics
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import i18n from '@/plugins/i18n'
import SuiVue from 'semantic-ui-vue'
import store from '@/store'

// Import Layouts
import Basic from '@/layouts/basic'

// Music Player
import VuePlyr from 'vue-plyr'
//import 'vue-plyr/dist/vue-plyr.css' // only if your build system can import css, otherwise import it wherever you would import your css.

// Custom Vue-Style component
Vue.component('v-style', {
  render: function (createElement) {
    return createElement('style', this.$slots.default)
  }
})

// Use Music Player
Vue.use(VuePlyr)

// Use Layouts
Vue.component('basic-layout', Basic)

// Use Config Production Tip
Vue.config.productionTip = false

// Use Semantic Ui Vue
Vue.use(SuiVue);

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
