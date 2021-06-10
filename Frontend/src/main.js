// Vue 모듈 생성
import Vue from 'vue';

// Vuex 모듈 생성
import Vuex from 'vuex';

// Vuex-persistedstate 모듈 생성
import createPersistedState from "vuex-persistedstate";

// 대쉬보드 모듈 생성
import DashboardPlugin from './plugins/dashboard-plugin';

// 메인 App.vue 컴포넌트 연결
import App from './App.vue';

// 기본 라우터 생성
import router from './routes/router';


// 플러그인 연결
Vue.use(DashboardPlugin);
Vue.use(Vuex);

// Vuex의 관리포인트 - Store: (state[상태 Data], mutations[상태변경-동기], actions[상태변경요청-비동기], getter[상태업로드])
const store = new Vuex.Store({
  // 쿠키나 저장소를 활용하지 않아도 되도록, Vuex의 데이터를 자동으로 저장소에 저장해주는 플러그인
  plugins: [
      createPersistedState()
  ],
  // 정적인 상태의 데이터 (일반호출 - 값의 변경은 mutations를 통해서만 가능하다.)
  state: {
    projects: null,
    showAddPage_value: false,
    showViewPage_value: false,
    showViewIndex_value: 0
  },
  // 동적인 상태의 데이터 및 함수 (commit호출)
  mutations: {
      // logic
  },
  // mutations를 동기가 아닌 비동기로 제어하기 위한 수단. (dispatch호출)
  actions: {
      // logic
  },
  // computed처럼 계산된 속성. state를 활용하여, view에 바인딩하기 위한 수단.
  getters: {
      // logic
  }
});

// 시작 페이지의 Vue인스턴스와 연결
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
});







