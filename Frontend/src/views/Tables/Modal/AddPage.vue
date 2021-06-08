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
            <h1 id="title">Project Add</h1>

            <!-- header close -->
            <base-button size="sm" outline type="default" id="remove_Button" @click="$emit('closeAdd')">
              <i class="ni ni-fat-remove" id="remove"></i>
            </base-button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <!-- Form -->
          <validation-observer v-slot="{handleSubmit}" ref="formValidator">
          <b-form role="form" @submit.prevent="handleSubmit(onSubmit)"> 
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
              <select class="form-control" name="department" v-model="model.department">
                  <option>Department</option>
                  <option>All</option>
                  <option>대표</option>
                  <option>R&D</option>
                  <option>스마트팜</option>
                  <option>영업마케팅</option>
                  <option>물류</option>
                  <option>경영지원</option>
              </select>
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
            <base-input label="End Day" prepend-icon="ni ni-calendar-grid-58">
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

            <!-- Submit Button -->
            <base-button v-on:click="onlyInputOne" type="primary" native-type="submit" class="my-4" id="submit">Add</base-button>

          </b-form>
          </validation-observer>
        </div>

    </div>
    </div>
    </div>
  </transition>
</template> 


<script> 
/* eslint-disable */
/*   JavaScript   */
import axios from 'axios'
import Swal from 'sweetalert2'
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
    ],
    // 동적인 상태의 데이터 및 함수 (commit호출)
    mutations: {
      setProjects(state, payload) {
        console.log("Set Projects Now... (Title) " + payload.projects[0].project_title);
        state.projects = payload.projects;
      },
      showAddPage(state, value) {
          console.log("Show AddPage-Value: " + value);
          state.showAddPage_value = value;
      }
    }
});

export default {
  components: {flatPicker},
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
    onSubmit() {
      // API: /projectAddTry
      axios({
          method: "POST",
          url: '/projectAddTry',
          data: {
            "title": this.model.title,
            "department": this.model.department,
            "users": this.model.users,
            "startDay": this.model.startDay,
            "endDay": this.model.endDay,
            "purpose": this.model.purpose
          }
      })
      .then((response) => {
          console.log("Response Data: " + response.data);
          // 프로젝트 추가 성공 후 페이지 종료
          if(response.data == true) {
            // Get Projects
            axios({
              method: "get",
              url: '/projectGetTry'
              
            }).then((response) => {
              // Todo Save - Vuex
              console.log("Get Projects: " + response.data);
              console.log("Set Projects to Vuex...");

              // Vuex에 데이터 커밋
              store.commit('setProjects', {
                projects: response.data
              });

            }).catch((error) => {
              console.log("Error: " + error);
            });

            // 성공알림
            Swal.fire({
              title: 'Successful!',
              text: '프로젝트가 성공적으로 추가되었습니다.',
              icon: 'success',
              confirmButtonText: '확인'
            });

            // 새로고침
            setTimeout(function(){
              location.reload();
            },1000);
            console.log(true);
          }
          
          // 프로젝트 추가 실패 후 경고알림
          if(response.data == false) {
            // 새로고침
            console.log(false);
            
            // 경고알림
            Swal.fire({
              title: 'Error!',
              text: '중복되는 프로젝트명이 존재합니다.',
              icon: 'error',
              confirmButtonText: '확인'
            });
          }
      })
      .catch((error) => {
          // 프로젝트 추가 실패 시 에러출력
          console.log("Error: " + error);
      });
    },

    // 프로젝트 제목 정규식
    onlyTitle(){
      console.log("Title: " + this.model.title);
      const reg =  /^[a-zA-Zㄱ-힣0-9 ]*$/;
        if(reg.exec(this.model.title) == null){
          Swal.fire({
            title: 'Error!',
            text: '특수문자는 입력이 불가능합니다.',
            icon: 'error',
            confirmButtonText: '확인'
          });
          return this.model.title = this.model.title.slice(0,-1);
        }
    },
    // 프로젝트 담당자 정규식
    onlyUsers(){
      console.log("Users: " + this.model.users);
      const reg = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/;
        if(reg.exec(this.model.users) == null){
          Swal.fire({
            title: 'Error!',
            text: '한글만 입력해주세요.',
            icon: 'error',
            confirmButtonText: '확인'
          });
          return this.model.users = this.model.users.slice(0,-1);
        }
    },
    // 프로젝트 목적 정규식
    onlyPurpose(){
      console.log("Purpose: " + this.model.purpose);
      const reg =  /^[a-zA-Zㄱ-힣0-9"'`~!@#$%^&* ,:+-]*$/;
        if(reg.exec(this.model.purpose) == null){
          Swal.fire({
            title: 'Error!',
            text: '특수문자는 입력이 불가능합니다.',
            icon: 'error',
            confirmButtonText: '확인'
          });
          return this.model.purpose = this.model.purpose.slice(0,-1);
        }
    },
    // Submit 정규식
    onlyInputOne(){
      // LOG
      console.log("----------------------------------");
      console.log("- Project Add Data - \n ");
      console.log(" Title: " + this.model.title);
      console.log(" Department: " + this.model.department);
      console.log(" Users: " + this.model.users);
      console.log(" Start Day: " + this.model.startDay);
      console.log(" End Day: " + this.model.endDay + "\n");
      console.log(" Purpose: " + this.model.purpose  + "\n");
      console.log("----------------------------------");
      
        // 입력값 비교확인 (title, department, users, startday, endday, purpose)
        if(this.model.title == ""){
          Swal.fire({
            title: 'Error!',
            text: '프로젝트명을 입력해주세요!',
            icon: 'error',
            confirmButtonText: '확인'
          })
        }
    
        else if(this.model.department == "Department"){
          Swal.fire({
            title: 'Error!',
            text: '부서를 선택해주세요!',
            icon: 'error',
            confirmButtonText: '확인'
          })
        }

        else if(this.model.users == ""){
          Swal.fire({
            title: 'Error!',
            text: '담당자명을 입력해주세요!',
            icon: 'error',
            confirmButtonText: '확인'
          })
        }
       
        else if((this.model.startDay) == ""){
          Swal.fire({
            title: 'Error!',
            text: '시작일을 선택해주세요!',
            icon: 'error',
            confirmButtonText: '확인'
          })
        }

        else if((this.model.endDay) == ""){
          Swal.fire({
            title: 'Error!',
            text: '마감일을 선택해주세요!',
            icon: 'error',
            confirmButtonText: '확인'
          })
        }

        else if((this.model.purpose) == ""){
          Swal.fire({
            title: 'Error!',
            text: '목적을 작성해주세요!',
            icon: 'error',
            confirmButtonText: '확인'
          })
        }
    }


  }
}
</script>


<style>
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
