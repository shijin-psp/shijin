import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/filterTable',
      name: 'filterTable',
      component: () => import(/* webpackChunkName: "about" */ '@/views/FilterTable/index.vue')
    },
    // {
    //   path: '/detail/:cid',
    //   name: 'detail',
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/Detail/detail.vue')
    // }
  ]
})

router.beforeEach((to, from, next) => {
    if(!to.name) {
        next({ path: '/' });

        window.location.reload();
    }

    next();
})

export default router;
