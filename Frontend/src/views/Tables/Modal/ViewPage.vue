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
                {{ title }}
            </p> 
          
            <!-- Department -->
            <h2>Department</h2>
            <p class="lead">
                {{ department }}
            </p>

            <!-- Users -->
            <h2>Users</h2>
            <p class="lead">
                {{ users }}
            </p>

            <!-- StartDay -->
            <h2>StartDay</h2>
            <p class="lead">
               {{ startDay }}
            </p>

            <!-- EndDay -->
            <h2>EndDay</h2>
            <p class="lead">
                {{ endDay }}
            </p>

            <!-- Purpose -->
            <h2>Purpose</h2>
            <p class="lead">
                {{ purpose }}
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
        title: '',
        department: '',
        users: '',
        startDay: '',
        endDay: '',
        purpose: ''
      }
  },
  created() {
    // Get - Vuex Project & Index
    console.log("--- Created ---");
    var projects = this.$store.state.projects;
    var index = this.$store.state.showViewIndex_value;
    console.log("Projects: " + projects + ", Index: " + index);

    // Making - Date Form
    var startDay = new Date(projects[index].project_startDay);
      var sYear = startDay.getFullYear();
      var sMonth = startDay.getMonth() + 1;
          sMonth = sMonth > 9 ? sMonth : "0" + sMonth;
      var sDay = startDay.getDate();
          sDay = sDay > 9 ? sDay : "0" + sDay;

    var endDay  = new Date(projects[index].project_endDay);
      var eYear = endDay.getFullYear();
      var eMonth = endDay.getMonth() + 1;
          eMonth = eMonth > 9 ? eMonth : "0" + eMonth;
      var eDay = endDay.getDate();
          eDay = eDay > 9 ? eDay : "0" + eDay;
    
    console.log("Start Day: " + startDay + ", End Day: " + endDay);
    console.log("Make Start Day: " + sYear + sMonth + sDay);
    console.log("Make Etart Day: " + eYear + eMonth + eDay);

    // Save - Date
    startDay = sYear + "-" + sMonth + "-" + sDay;
    endDay = eYear + "-" + eMonth + "-" + eDay;

    // Set - Projects Data
    this.title = projects[index].project_title;
    this.department = projects[index].project_department;
    this.users = projects[index].project_users;
    this.startDay = startDay;
    this.endDay = endDay;
    this.purpose = projects[index].project_purpose;
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
