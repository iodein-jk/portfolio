import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1e35b2cc = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */))
const _4a400e5d = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages_profile_index" */))
const _8fffec38 = () => interopDefault(import('..\\pages\\works\\index.vue' /* webpackChunkName: "pages_works_index" */))
const _75603e7e = () => interopDefault(import('..\\pages\\works\\entry\\index.vue' /* webpackChunkName: "pages_works_entry_index" */))
const _7f10cba4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _1e35b2cc,
    name: "blog"
  }, {
    path: "/profile",
    component: _4a400e5d,
    name: "profile"
  }, {
    path: "/works",
    component: _8fffec38,
    name: "works"
  }, {
    path: "/works/entry",
    component: _75603e7e,
    name: "works-entry"
  }, {
    path: "/",
    component: _7f10cba4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
