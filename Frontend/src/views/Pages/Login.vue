<template>
  <div>
    <!-- Header-->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <!-- Login Main Title -->
      <b-container>
      <div class="header-body text-center mb-5">
          <b-row class="justify-content-center">
          <b-col xl="5" lg="6" md="8" class="px-5">
              <!-- Title -->
              <h1 class="text-white">Welcome!</h1>
              <p class="text-lead text-white">Projects Management Homepage</p>
          </b-col>
          </b-row>
      </div>
      </b-container>
    </div>

  
    <!-- Page content -->
    <b-container class="mt--8 pb-8">
      <!-- Login Table -->
      <b-row class="justify-content-center">
      <b-col lg="5" md="7">
      <b-card no-body class="bg-secondary border-0 mb-0">
    
            <!-- Login Form Title -->
            <b-card-header class="bg-transparent pb-3"  >
              <div class="text-muted text-center mt-2 mb-3">
                <h1>LOGIN</h1>
              </div>
            </b-card-header>

            <!-- Login Form -->
            <b-card-body class="px-lg-5 py-lg-5">
            <validation-observer v-slot="{handleSubmit}" ref="formValidator">
            <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">

                  <!-- Login Form -->
                  <base-input alternative
                              class="mb-3"
                              name="ID"
                              :rules="{required: true, min: 6, max:15}"
                              prepend-icon="ni ni-key-25"
                              placeholder="ID"
                              v-model="model.id"
                              v-on:keydown="onlyEngNumId"
                              v-on:keyup="onlyEngNumId"
                  >
                  </base-input>

                  <!-- Password Form -->
                  <base-input alternative
                              class="mb-3"
                              name="Password"
                              :rules="{required: true, min: 6, max:20}"
                              prepend-icon="ni ni-lock-circle-open"
                              type="password"
                              placeholder="Password"
                              v-model="model.password"
                              v-on:keydown="onlyEngNumPassword"
                              v-on:keyup="onlyEngNumPassword"
                  >
                  </base-input>

                  <!-- Submit Button -->
                  <div class="text-center">
                    <base-button v-on:click="onlyInputOne" type="primary" native-type="submit" class="my-4">Sign in</base-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
      </b-card>
                
       <!-- Footer Option -->
       <b-row class="mt-5">
             <!-- Here option tag --> 
      </b-row>
      </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
/* eslint-disable */
/*   JavaScript   */
import axios from 'axios'
import Swal from 'sweetalert2'

/*   Vue Instance   */
export default {
  data() {
    return {
      model: {
        id: '',
        password: ''
      }
    };
  },
  methods: {
    // 서버에 로그인 요청
    onSubmit() {
      console.log("----------------------------------");
      console.log("- Login Data - \n ");
      console.log(" ID: " + this.model.id);
      console.log(" Password: " + this.model.password + "\n");
      console.log("----------------------------------");

      // API: /loginTry
      axios({
          method: "POST",
          url: '/loginTry',
          data: {
            "id": this.model.id,
            "pw": this.model.password
          }
      })
      .then((response) => {
          console.log("Response: " + response);
          console.log("응답받은 데이터 값: " + response.data);
          // 로그인 성공 후 메인 페이지 이동
          if(response.data == true) {
            // Move Projects
            this.$router.replace('projects');

            // Get Projects
            axios({
              method: "get",
              url: '/projectGetTry'
            }).then((response) => {
              // Todo Save - Vuex
              //    H e r e     //
              console.log("Get Projects: " + response);

            }).catch((error) => {
              console.log("Error: " + error);
            });

          }

          // 로그인 실패 시  경고알림
          if(response.data == false) {
            Swal.fire({
              title: 'Error!',
              text: '로그인 정보가 일치하지 않습니다.',
              icon: 'error',
              confirmButtonText: '확인'
            });
          }
          
      })
      .catch((error) => {
          console.log("Error: " + error);
      });

      /*/ 새로고침
      setTimeout(function(){
      location.reload();
      },100);
      */
        
    },
    // 회원 ID 정규식
    onlyEngNumId(){
      console.log("ID: " + this.model.id);
      const reg = /[^a-z0-9]/gi;
        if(reg.exec(this.model.id) !== null){
          Swal.fire({
            title: 'Error!',
            text: '영문, 숫자만 입력해주세요. (6자 ~ 15자 이내)',
            icon: 'error',
            confirmButtonText: '확인'
          });
          return this.model.id = this.model.id.slice(0,-1);
        }
    },
    // 회원 Password 정규식
    onlyEngNumPassword(){
      console.log("ID: " + this.model.password);
      const reg = /[^a-z0-9]/gi;
        if(reg.exec(this.model.password) !== null){
          Swal.fire({
            title: 'Error!',
            text: '영문, 숫자만 입력해주세요. (6자 ~ 20자 이내)',
            icon: 'error',
            confirmButtonText: '확인'
          });
          return this.model.password = this.model.password.slice(0,-1);
        }
    },
    // Submit 정규식
    onlyInputOne(){
      // LOG
      console.log("ID: " + this.model.id);
      console.log("Password: " + this.model.password);

        // 입력값 비교확인 (Name, ID, Password, Department)
        if(this.model.id == ""){
          Swal.fire({
            title: 'Error!',
            text: '아이디를 입력해주세요!',
            icon: 'error',
            confirmButtonText: '확인'
          });
        }
        else if(this.model.password == ""){
          Swal.fire({
            title: 'Error!',
            text: '비밀번호를 입력해주세요!',
            icon: 'error',
            confirmButtonText: '확인'
          });
        }
        
    }
  }
};
</script>

<style></style>