import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1e35b2cc = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */))
const _4a400e5d = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages_profile_index" */))
const _8fffec38 = () => interopDefault(import('..\\pages\\works\\index.vue' /* webpackChunkName: "pages_works_index" */))
const _aac38874 = () => interopDefault(import('..\\pages\\blog\\category\\_slug.vue' /* webpackChunkName: "pages_blog_category__slug" */))
const _8213c2b4 = () => interopDefault(import('..\\pages\\blog\\tag\\_slug.vue' /* webpackChunkName: "pages_blog_tag__slug" */))
const _83ced644 = () => interopDefault(import('..\\pages\\works\\category\\_slug.vue' /* webpackChunkName: "pages_works_category__slug" */))
const _73a99d36 = () => interopDefault(import('..\\pages\\works\\entry\\_slug.vue' /* webpackChunkName: "pages_works_entry__slug" */))
const _51fe768e = () => interopDefault(import('..\\pages\\works\\tag\\_slug.vue' /* webpackChunkName: "pages_works_tag__slug" */))
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
    path: "/blog/category/:slug?",
    component: _aac38874,
    name: "blog-category-slug"
  }, {
    path: "/blog/tag/:slug?",
    component: _8213c2b4,
    name: "blog-tag-slug"
  }, {
    path: "/works/category/:slug?",
    component: _83ced644,
    name: "works-category-slug"
  }, {
    path: "/works/entry/:slug?",
    component: _73a99d36,
    name: "works-entry-slug"
  }, {
    path: "/works/tag/:slug?",
    component: _51fe768e,
    name: "works-tag-slug"
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
