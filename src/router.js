import Vue from "vue";
import Router from "vue-router";

import Frame from "@/components/Frame"
import Bar from '@/components/Bar'
import Line from '@/components/Line'
import Guage from '@/components/Guage'
import Pie from '@/components/Pie'
import Scatter from '@/components/Scatter'
import Radar from '@/components/Radar'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/echarts/',
      component: Frame,
      children: [
        { path: 'bar', component: Bar },
        { path: 'line', component: Line },
        { path: 'guage', component: Guage },
        { path: 'pie', component: Pie },
        { path: 'scatter', component: Scatter },
        { path: 'radar', component: Radar }
      ]
    }

  ]
})
