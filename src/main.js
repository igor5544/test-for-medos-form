import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import '@/styles/styles.scss'

Vue.use(Vuelidate);

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
