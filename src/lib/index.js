import Album from './Album.vue'
window.DEBUG = () => {
  console.log(111)
}
let install = function(Vue) {
  Vue.component(Album.name, Album)
}
export default { install }
