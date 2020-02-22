import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _73615594 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _5c2a3ccd = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _18395cb4 = () => interopDefault(import('../pages/works/index.vue' /* webpackChunkName: "pages/works/index" */))
const _5275cd32 = () => interopDefault(import('../pages/blog/category/_slug.vue' /* webpackChunkName: "pages/blog/category/_slug" */))
const _17d75b17 = () => interopDefault(import('../pages/blog/tag/_slug.vue' /* webpackChunkName: "pages/blog/tag/_slug" */))
const _602edcd6 = () => interopDefault(import('../pages/works/category/_slug.vue' /* webpackChunkName: "pages/works/category/_slug" */))
const _21208bfe = () => interopDefault(import('../pages/works/entry/_slug.vue' /* webpackChunkName: "pages/works/entry/_slug" */))
const _4ff8fe29 = () => interopDefault(import('../pages/works/tag/_slug.vue' /* webpackChunkName: "pages/works/tag/_slug" */))
const _4d1d86b3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _73615594,
    name: "blog"
  }, {
    path: "/profile",
    component: _5c2a3ccd,
    name: "profile"
  }, {
    path: "/works",
    component: _18395cb4,
    name: "works"
  }, {
    path: "/blog/category/:slug?",
    component: _5275cd32,
    name: "blog-category-slug"
  }, {
    path: "/blog/tag/:slug?",
    component: _17d75b17,
    name: "blog-tag-slug"
  }, {
    path: "/works/category/:slug?",
    component: _602edcd6,
    name: "works-category-slug"
  }, {
    path: "/works/entry/:slug?",
    component: _21208bfe,
    name: "works-entry-slug"
  }, {
    path: "/works/tag/:slug?",
    component: _4ff8fe29,
    name: "works-tag-slug"
  }, {
    path: "/",
    component: _4d1d86b3,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
