// 필요한 모듈 적용 (Dashboard, AuthLayout, NotFoundPage)
import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';
import NotFound from '@/views/NotFoundPage.vue';

// 라우터
const routes = [
  // 시작, 서브 요청 및 컴포넌트 (Login, Register, NotFound)
  {
    // 시작요청
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      // 시작요청
      {
        path: '/',
        name: 'login1',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      // 로그인 요청
      {
        path: '/login',
        name: 'login2',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      // 회원가입 요청
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;



/*
// 시작페이지 요청 및 컴포넌트
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,

    // 메인 요청 및 컴포넌트 (Projects, Add, User Profile)
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/Pages/UserProfile.vue')
      },
      {
        path: '/tables',
        name: 'tables',
        component: () => import('../views/RegularTables.vue')
      }
    ]
  */