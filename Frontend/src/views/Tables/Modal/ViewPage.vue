<template>
  <!-- Modal -->
  <transition name="modal">
    <!-- Background -->
    <div class="modal-mask">
    <!-- Space -->
    <div class="modal-wrapper" >
    <!-- Content -->
    <div class="modal-container">
        <!-- Header -->
        <div class="modal-header">
            <!-- header title -->
            <h1 id="title">Project View</h1>

            <!-- header close -->
            <base-button size="sm" outline type="default" id="remove_Button" @click="$emit('closeView')">
              <i class="ni ni-fat-remove" id="remove"></i>
            </base-button>

            
        </div>

        <!-- Body -->
        <div class="modal-body">
            <hr />
            <!-- Title -->
            <h2>Title</h2>
            <p class="lead">
                Project Management HomePage
            </p> 
          
            <!-- Department -->
            <h2>Department</h2>
            <p class="lead">
                스마트팜
            </p>

            <!-- Users -->
            <h2>Users</h2>
            <p class="lead">
                김장은
            </p>

            <!-- StartDay -->
            <h2>StartDay</h2>
            <p class="lead">
               2021-05-01
            </p>

            <!-- EndDay -->
            <h2>EndDay</h2>
            <p class="lead">
                2021-05-14
            </p>

            <!-- Purpose -->
            <h2>Purpose</h2>
            <p class="lead">
                사내 업무 효율을 최대로 증진시키기 위한 홈페이지를 제작합니다.
            </p>

        </div>

    </div>
    </div>
    </div>
  </transition>
</template> 


<script> 
/* eslint-disable */
/*   JavaScript   */
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
Vue.use(Vuex);


// Vuex에 데이터 저장
const store = new Vuex.Store({
    // 쿠키나 저장소를 활용하지 않아도 되도록, Vuex의 데이터를 자동으로 저장소에 저장해주는 플러그인
    plugins: [
      createPersistedState()
    ]
});

export default {
  components: {
      flatPicker
  },
  data() {
      return {
        show: false,
        model: {
          title: '',
          department: 'Department',
          users: '',
          startDay: '',
          endDay: '',
          purpose: ''
        }
      }
  },
  methods: {
    /*/ Todo Save - Vuex
    console.log("Get Projects: " + response.data);
    console.log("Set Projects to Vuex...");

    // Vuex에 데이터 커밋
    store.commit('setProjects', {
        projects: response.data
    });
    // 새로고침
    setTimeout(function(){
        location.reload();
    },1000);
    console.log(true);*/
  }
}
</script>

<style scoped>
/* Content */
hr {
    margin: 0px;
    padding: 0px;
    background: rgb(187, 185, 185);
}
h2 {
    margin: 0px;
    padding: 0px;
    margin-top: 1rem;
}

p {
    margin: 0px;
    padding: 0px;
    margin-bottom: 1rem;
}

/* Modal */
.modal-mask {
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  z-index: 1001;
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  z-index: 1002;
  width: 90%;
  margin: 0px auto;
  padding: 0.5rem 0.5rem;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .5s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-body {
  margin: 0px;
  padding: 1rem;
}

.modal-footer {
  margin: 0px;
  padding: 0px;
}

.modal-default-button {
  margin: 0px;
  padding: 0px;
}



/* Trangitions */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
