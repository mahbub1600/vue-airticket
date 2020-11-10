import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import AirTicket from '@/components/AirTicket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AirTicket',
      component: AirTicket
    }
  ]
})
