import Vue from 'vue'
import App from './App.vue'


import vueTimelineComponent from 'vue-timeline-component'
Vue.use(vueTimelineComponent);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

require('../node_modules/vue-visjs-timeline/dist/vue-visjs-timeline.css')


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// import vuetify
import vuetify from './plugins/vuetify'

