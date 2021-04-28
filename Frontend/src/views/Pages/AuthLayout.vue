<template>
  <!--Computer Nav-Bar -->
  <div class="main-content bg-default">
    <base-nav
      v-model="showMenu"
      :transparent="true"
      menu-classes="justify-content-end"
      class="navbar-horizontal navbar-main navbar-top navbar-dark"
      expand="lg"
    >

    <!-- Nav Logo -->
    <div slot="brand" class="navbar-wrapper">
    <b-navbar-brand to="/">
        <!-- First Logo Here -->
        <div class="header-body text-center mb-5">
          <!-- 임시 div -->
        </div>
    </b-navbar-brand>
    </div>

    <!-- Mobile Nav Header -->
    <template>
      <div class="navbar-collapse-header">
      <b-row>
        <!-- Nav Logo -->
        <b-col cols="6" class="collapse-brand">
          <router-link to="/">
          <img src="img/brand/Logo.png">
          </router-link>
        </b-col>

        <!-- Nav On/Off -->
        <b-col cols="6" class="collapse-close">
          <button type="button" class="navbar-toggler" @click="showMenu = false">
          <span></span>
          <span></span>
          </button>
        </b-col>

      </b-row>
      </div>

      <!-- Nav Content -->
      <b-navbar-nav  class="align-items-lg-center ml-lg-auto">
        
        <!-- Nav item: Projects -->
        <b-nav-item to="/dashboard">
          <!-- Icon & Name -->
          <i class="ni ni-planet"></i> <span class="nav-link-inner--text">Projects</span>
        </b-nav-item>
            
        <!-- Nave Item: Register -->
        <b-nav-item to="/register">
          <i class="ni ni-circle-08"></i>
          <span class="nav-link-inner--text">Register</span>
        </b-nav-item>

        <!-- Nave Item: Login -->
        <b-nav-item to="/login">
          <i class="ni ni-key-25"></i>
          <span class="nav-link-inner--text">Login</span>
        </b-nav-item>

        <!-- Nave Item: Profile -->
        <b-nav-item to="/profile">
          <i class="ni ni-single-02"></i>
          <span class="nav-link-inner--text">Profile</span>
        </b-nav-item>

      </b-navbar-nav>
    </template>
    </base-nav>

    <!-- 반응형 웹페이지의 토대 -->
    <div class="main-content">
      <zoom-center-transition
        :duration="pageTransitionDuration"
        mode="out-in"
      >
        <router-view></router-view>
      </zoom-center-transition>
    </div>

    <!-- Footer -->
    <footer class="py-5" id="footer-main">
    <b-container >
    <b-row align-v="center" class="justify-content-xl-between">
      
      <!-- Main Footer -->
      <b-col xl="6">
        <div class="copyright text-center text-xl-left text-muted">
        © {{year}} <a href="https://github.com/FoodyWorm/PMH" class="font-weight-bold ml-1" target="_blank">Creative Jangenkim</a>
        </div>
      </b-col>
      
      <!-- Sub Footer -->
      <b-col xl="6" class="col-xl-6">
        <b-nav  class="nav-footer justify-content-center justify-content-xl-end">
          <!-- Creative -->
          <b-nav-item href="https://github.com/FoodyWorm/PMH" target="_blank" >
            Creative Jangenkim
          </b-nav-item>

          <!-- About Us -->
          <b-nav-item href="https://www.creative-tim.com/presentation" target="_blank" >
            About Us
          </b-nav-item>

          <!-- Blog -->
          <b-nav-item href="https://develop-studying.tistory.com/"  target="_blank">
            Blog
          </b-nav-item>

          <!-- License -->
          <b-nav-item href="https://www.creative-tim.com/license" target="_blank">
            License
          </b-nav-item>
        </b-nav>
      </b-col>
    </b-row>
    </b-container>
    </footer>

  </div>
</template>


<script>
  import { BaseNav } from '@/components';
  import { ZoomCenterTransition } from 'vue2-transitions';

  export default {
    components: {
      BaseNav,
      ZoomCenterTransition
    },
    props: {
      backgroundColor: {
        type: String,
        default: 'black'
      }
    },
    data() {
      return {
        showMenu: false,
        menuTransitionDuration: 250,
        pageTransitionDuration: 200,
        year: new Date().getFullYear(),
        pageClass: 'login-page'
      };
    },
    computed: {
      title() {
        return `${this.$route.name} Page`;
      }
    },
    methods: {
      toggleNavbar() {
        document.body.classList.toggle('nav-open');
        this.showMenu = !this.showMenu;
      },
      closeMenu() {
        document.body.classList.remove('nav-open');
        this.showMenu = false;
      },
      setBackgroundColor() {
        document.body.classList.add('bg-default');
      },
      removeBackgroundColor() {
        document.body.classList.remove('bg-default');
      },
      updateBackground() {
        if (!this.$route.meta.noBodyBackground) {
          this.setBackgroundColor();
        } else {
          this.removeBackgroundColor()
        }
      }
    },
    beforeDestroy() {
      this.removeBackgroundColor();
    },
    beforeRouteUpdate(to, from, next) {
      // Close the mobile menu first then transition to next page
      if (this.showMenu) {
        this.closeMenu();
        setTimeout(() => {
          next();
        }, this.menuTransitionDuration);
      } else {
        next();
      }
    },
    watch: {
      $route: {
        immediate: true,
        handler: function () {
          this.updateBackground()
        }
      }
    }
  };
</script>

<style lang="scss">
  $scaleSize: 0.8;
  @keyframes zoomIn8 {
    from {
      opacity: 0;
      transform: scale3d($scaleSize, $scaleSize, $scaleSize);
    }
    100% {
      opacity: 1;
    }
  }

  .main-content .zoomIn {
    animation-name: zoomIn8;
  }

  @keyframes zoomOut8 {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: scale3d($scaleSize, $scaleSize, $scaleSize);
    }
  }

  .main-content .zoomOut {
    animation-name: zoomOut8;
  }
</style>
