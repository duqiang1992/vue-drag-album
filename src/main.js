import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vueDragAlbum from 'vue-drag-album'
import 'vue-drag-album/dist/vue-Album.css'

Vue.config.productionTip = false
// 全局注册
Vue.use(vueDragAlbum)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
