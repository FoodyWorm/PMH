<template>
  <!-- Modal -->
  <transition name="modal">
    <!-- Background -->
    <div class="modal-mask" @click="$emit('closeView')">
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
            <!-- Title -->
            <base-input class="mb-0 mt-0"
                        name="Title"
                        :rules="{required: true, min: 1, max:30}"
                        prepend-icon="ni ni-caps-small"
                        type="text"
                        label="Title"
                        placeholder="Title"
                        v-model="model.title"
                        v-on:keydown="onlyTitle"
                        v-on:keyup="onlyTitle"
            >
            </base-input>

            <!-- Department -->
            <base-input class="mb-0 mt-0"
                        prepend-icon="ni ni-badge"
                        type="select"
                        label="Department"
            >
            </base-input>

            <!-- Users -->
            <base-input class="mb-0 mt-0"
                        name="Users"
                        :rules="{required: true, min: 1, max:13}"
                        prepend-icon="ni ni-single-02"
                        type="text"
                        label="Users"
                        placeholder="Users"
                        v-model="model.users"
                        v-on:keydown="onlyUsers"
                        v-on:keyup="onlyUsers"
            >
            </base-input>

            <!-- StartDay -->
            <base-input class="mb-0 mt-0" label="Start Day" prepend-icon="ni ni-calendar-grid-58">
              <flat-picker slot-scope="{focus, blur}"
                          @on-open="focus"
                          @on-close="blur"
                          :config="{allowInput: true}"
                          class="form-control datepicker"
                          v-model="model.startDay">
              </flat-picker>
            </base-input>

            <!-- EndDay -->
            <base-input label="EndDay" prepend-icon="ni ni-calendar-grid-58">
              <flat-picker slot-scope="{focus, blur}"
                          @on-open="focus"
                          @on-close="blur"
                          :config="{allowInput: true}"
                          class="form-control datepicker"
                          v-model="model.endDay">
              </flat-picker>
            </base-input>
            
            <!-- Purpose -->
            <h4>Purpose</h4>
            <b-form-textarea
              id="textarea"
              :rules="{required: true, min: 1, max:100}"
              v-model="model.purpose"
              placeholder="purpose..."
              rows="3"
              max-rows="6"
              v-on:keydown="onlyPurpose"
              v-on:keyup="onlyPurpose"
            ></b-form-textarea>
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
#title {
  margin: 0px;
  padding: 0px;
}
#remove_Button {
    margin: 0px;
    padding: 0px;
    border-style: none;
}

#remove {
    margin: 0px;
    padding: 0px;
    font-size: 2rem;
}

#submit {
  margin: 0px;
  padding: 0.5rem;
  width: 100%;
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
  padding: 0px;
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
