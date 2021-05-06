// Vue 모듈 생성
import Vue from 'vue';

// Vue 라우터 모듈 생성
import VueRouter from 'vue-router';

// Vue 라우터 생성
import routes from './routes';

// Vue에 Vue 라우터 모듈 적용
Vue.use(VueRouter);

// Vue 라우터에 Vue 라우터 모듈을 적용
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active',
  scrollBehavior: (to, from ,savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});






export default router;
