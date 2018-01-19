import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'common/stylus/reset.styl'
import store from './store'

Vue.filter('getTime', function (time) {
  if (time > 10000) {
    let v = Math.floor(time / 10000)
    return `${v}万次`
  }
  return `${time}次`
})

Vue.filter('formatTime', function (time) {
  let m = Math.floor(time / 60).toString().padStart(2, '0')
  let s = Math.floor(time - 60 * m).toString().padStart(2, '0')
  return `${m}:${s}`
})

Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
