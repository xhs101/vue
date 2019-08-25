// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import VueCookies from 'vue-cookies'

Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(VueCookies)
Vue.prototype.$axios = axios

Vue.config.productionTip = false
// Vue.http.options.emulateJSON = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  axios,
  template: '<App/>'
})

Vue.directive('enter-number', {
  inserted: function (el) {
    el.addEventListener('keypress', function (e) {
      e = e || window.event
      let charcode = typeof e.charCode === 'number' ? e.charCode : e.keyCode
      let re = /\d/
      if (!re.test(String.fromCharCode(charcode)) && charcode > 9 && !e.ctrlKey) {
        if (e.preventDefault) {
          e.preventDefault()
        } else {
          e.returnValue = false
        }
      }
    })
  }
})
// var qs = require('qs')
// axios.interceptors.request.use(config => {
//   if (config.type === 'formData' || config.method !== 'post') {
//     return config
//   }
//   config.data = qs.stringify(config.data)
//   return config
// }, (err) => {
//   return Promise.reject(err)
// })
