import vueCityAmies from './vue-city-amies.vue'
const cityamies = {
  install(Vue, options){
    Vue.component(vueCityAmies.name, vueCityAmies)
  }
}
if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(cityamies)
}
export default cityamies