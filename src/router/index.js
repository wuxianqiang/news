import Vue from 'vue'
import Router from 'vue-router'
import news from 'components/news/news'
import recommend from 'components/recommend/recommend'
import videos from 'components/videos/videos'
import beijing from 'components/beijing/beijing'
import recreation from 'components/recreation/recreation'
import nba from 'components/nba/nba'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      component: news
    },
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/videos',
      component: videos
    },
    {
      path: '/beijing',
      component: beijing
    },
    {
      path: '/recreation',
      component: recreation
    },
    {
      path: '/nba',
      component: nba
    }
  ]
})
