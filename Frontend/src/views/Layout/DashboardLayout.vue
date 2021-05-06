<template>
  <!-- 메인페이지 레이아웃 -->
  <div class="wrapper">
    
    <!-- 공지사항이나 알림등을 이 태그 안에 기입하면 된다. ex) 프로젝트 마감이 ~ 만큼 남았어요! -->
    <notifications></notifications>

    <!-- 메인 페이지의 왼쪽 사이드바의 버튼 -->
    <side-bar>
      <template slot="links">
        <!-- Projects -->
        <sidebar-item
          :link="{
            name: 'Projects',
            path: '/projects',
            icon: 'ni ni-calendar-grid-58 text-green',
          }"
        >

        <!-- Add -->
        </sidebar-item>

         <sidebar-item
                :link="{
                  name: 'Add',
                  path: '/add',
                  icon: 'ni ni-bullet-list-67 text-red'
                }">
        </sidebar-item>
      
        <!-- User Profile -->
        <sidebar-item
              :link="{
                name: 'User Profile',
                path: '/profile',
                icon: 'ni ni-single-02 text-yellow'
                }">
        </sidebar-item>
      </template>
    </side-bar>
    
    <!-- 메인 페이지 (Projects)의 내부 페이지 -->
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>

</template>


<script>
  /* eslint-disable no-new */
  import PerfectScrollbar from 'perfect-scrollbar';
  import 'perfect-scrollbar/css/perfect-scrollbar.css';

  function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
  }

  function initScrollbar(className) {
    if (hasElement(className)) {
      new PerfectScrollbar(`.${className}`);
    } else {
      // try to init it later in case this component is loaded async
      setTimeout(() => {
        initScrollbar(className);
      }, 100);
    }
  }

  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import DashboardContent from './Content.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      DashboardContent,
      FadeTransition
    },
    methods: {
      initScrollbar() {
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          initScrollbar('sidenav');
        }
      }
    },
    mounted() {
      this.initScrollbar()
    }
  };
</script>

<style lang="scss">
</style>
