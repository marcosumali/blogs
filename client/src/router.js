import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Admin from './views/Admin.vue'
import Blogs from './views/Blogs.vue'
import SingleBlog from './views/SingleBlog.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }, {
      path: '/blogs',
      name: 'blogs',
      component: Blogs
    }, {
      path: '/blogs/:id',
      name: 'blog',
      component: SingleBlog
    }
  ]
})
