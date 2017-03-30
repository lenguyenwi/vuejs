// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import 'vue-material/dist/vue-material.css'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import VueFire from 'vuefire'
import App from './App'
import VueRouter from 'vue-router'

// import Hello from './components/Hello'
import ProjectsFirebase from './components/ProjectsFirebase'
import Login from './components/Login'
Vue.use(VueResource)
Vue.use(VueMaterial)
Vue.use(VueFire)
Vue.use(VueRouter)

// Vue.config.productionTip = false
const router = new VueRouter({
mode: 'history',
base: __dirname,
routes: [
{path:'/',component: ProjectsFirebase},
{path:'/Login',component: Login}
] });
/* eslint-disable no-new */
new Vue({
router,
render: (h) => h(App)
}).$mount(app)
