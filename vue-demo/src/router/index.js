import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import DragWrap from './../components/drag/DragWrap';
import WatchData from './../components/WatchData';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/drag',
      name: 'DragWrap',
      component: DragWrap
    },{
      path:'/watchData',
      name: 'WatchData',
      component: WatchData
    }
  ]
})
