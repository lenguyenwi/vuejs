// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueFire from 'vuefire'
import App from './App'
// import Hello from './components/Hello'
import ProjectsFirebase from './components/ProjectsFirebase'
Vue.use(VueResource)
Vue.use(VueMaterial)
Vue.use(VueFire)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
