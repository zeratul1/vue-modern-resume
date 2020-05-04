import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import helper from '@/plugins/helper'
import App from '@/App.vue'
import '@/components'

Vue.config.productionTip = false
Vue.use(helper)

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
