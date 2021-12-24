import Vue from 'vue'
import VueRouter from 'vue-router'
import Add from '../views/Add'
import Main from '../views/Main'
import Books from "../views/Books";
import Users from "../views/Users";
import Authors from "../views/Authors";
import Edit from "../views/Edit"
Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    component: Main
  },
  {
    path: '/add',
    component: Add,
    props: true,
  },
  {
    path: '/edit',
    component: Edit,
    props: true,
  },
  {
    path: '/users',
    component: Users
  },
  {
    path: '/books',
    component: Books
  },
  {
    path: '/authors',
    component: Authors
  },
]
const router = new VueRouter({
  routes
})
export default router