<template>
    <!-- Background Color -->
    <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
        <!-- 모바일 메인 페이지 Form -->
        <div class="container-fluid">
            <!-- 모바일 메인 페이지 왼쪽 메뉴바 버튼 -->
            <navbar-toggle-button @click.native="showSidebar">
                
            </navbar-toggle-button>

            <!-- 모바일 메인 페이지 LOGO -->
            <router-link class="navbar-brand" to="/projects">
                <img :src="logo" class="navbar-brand-img" alt="...">
            </router-link>

            <!-- 모바일 슬롯 오른쪽으로 옮기기 -->
            <slot name="mobile-right">
                <!-- 모바일 메뉴바 -->
                <ul class="nav align-items-center d-md-none">
                    <!-- 알림 버튼 -->
                    <base-dropdown class="nav-item" menu-on-right tag="li" title-tag="a">
                        <!-- 알림 아이콘 -->
                        <a slot="title-container" class="nav-link nav-link-icon" href="#" role="button"
                           aria-haspopup="true" aria-expanded="false">
                            <i class="ni ni-bell-55"></i>
                        </a>
                        <!-- Action -->
                        <a class="dropdown-item" href="#">Action</a>

                        <!-- Another Action -->
                        <a class="dropdown-item" href="#">Another action</a>

                        <!-- 밑줄 -->
                        <div class="dropdown-divider"></div>

                        <!-- Something else here -->
                        <a class="dropdown-item" href="#">Something else here</a>
                    </base-dropdown>

                    <!-- 프로필 -->
                    <base-dropdown class="nav-item" menu-on-right tag="li" title-tag="a">
                        <!-- 프로필 버튼 -->
                        <a slot="title-container" class="nav-link" href="#" role="button">
                            <!-- 프로필 위치 -->
                            <div class="media align-items-center">
                              <!-- 프로필 모형 -->
                              <span class="avatar avatar-sm rounded-circle">
                                <!-- 프로필 사진 -->
                                <img alt="Image placeholder" src="img/theme/team-1.jpg">
                              </span>
                            </div>
                        </a>

                        <!-- 프로필 메뉴 -->
                        <!-- 제목 -->
                        <div class=" dropdown-header noti-title">
                            <h6 class="text-overflow m-0">Welcome!</h6>
                        </div>

                        <!-- My Profile -->
                        <router-link to="/profile" class="dropdown-item">
                            <i class="ni ni-single-02"></i>
                            <span>My profile</span>
                        </router-link>

                        <!-- Settings -->
                        <router-link to="/profile" class="dropdown-item">
                            <i class="ni ni-settings-gear-65"></i>
                            <span>Settings</span>
                        </router-link>

                        <!-- Activity -->
                        <router-link to="/profile" class="dropdown-item">
                            <i class="ni ni-calendar-grid-58"></i>
                            <span>Activity</span>
                        </router-link>

                        <!-- Support -->
                        <router-link to="/profile" class="dropdown-item">
                            <i class="ni ni-support-16"></i>
                            <span>Support</span>
                        </router-link>

                        <!-- Logout -->
                        <div class="dropdown-divider"></div>
                        <a href="#!" class="dropdown-item">
                            <i class="ni ni-user-run"></i>
                            <span>Logout</span>
                        </a>
                    </base-dropdown>
                </ul>
            </slot>

            <slot></slot>

            <!-- 모바일 메인 페이지 왼쪽 메뉴바 내용 -->
            <div v-show="$sidebar.showSidebar" class="navbar-collapse collapse show" id="sidenav-collapse-main">
                <div class="navbar-collapse-header d-md-none">
                <div class="row">
                  <!-- 로고 -->
                  <div class="col-6 collapse-brand">
                              <router-link to="/dashboard">
                                  <img :src="logo">
                              </router-link>
                  </div>

                  <!-- 메뉴바 닫기 버튼 -->
                  <div class="col-6 collapse-close">
                            <navbar-toggle-button @click.native="closeSidebar"></navbar-toggle-button>
                  </div>
                </div>
                </div>

                <!-- 메뉴바 내용 -->
                <ul class="navbar-nav">
                    <slot name="links"></slot>
                </ul>
              </div>

        </div> <!-- 모바일 메인 페이지 Form -->
    </nav> <!-- Background Color -->
</template>


<script>
  import NavbarToggleButton from '@/components/NavbarToggleButton'

  export default {
    name: 'sidebar',
    components: {
      NavbarToggleButton
    },
    props: {
      logo: {
        type: String,
        default: 'img/brand/Logo.png',
        description: 'Sidebar app Logo'
      },
      autoClose: {
        type: Boolean,
        default: true,
        description: 'Whether sidebar should autoclose on mobile when clicking an item'
      }
    },
    provide() {
      return {
        autoClose: this.autoClose
      };
    },
    methods: {
      closeSidebar() {
        this.$sidebar.displaySidebar(false)
      },
      showSidebar() {
        this.$sidebar.displaySidebar(true)
      }
    },
    beforeDestroy() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.showSidebar = false;
      }
    }
  };
</script>
