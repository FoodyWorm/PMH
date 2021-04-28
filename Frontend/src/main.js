// Vue모듈 생성
import Vue from 'vue';

// 대쉬보드 모듈 생성
import DashboardPlugin from './plugins/dashboard-plugin';

// 메인 App.vue 컴포넌트 연결
import App from './App.vue';

// 기본 라우터 생성
import router from './routes/router';

// 플러그인 연결
Vue.use(DashboardPlugin);

// 시작 페이지의 Vue인스턴스와 연결
new Vue({
  el: '#app',
  render: h => h(App),
  router
});
