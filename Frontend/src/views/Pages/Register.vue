<template>
  <div>
    <!-- Header-->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">

    <!-- Register Main Title -->
    <b-container class="container">
      <div class="header-body text-center mb-5">
        <b-row class="justify-content-center">
        <b-col xl="5" lg="6" md="8" class="px-5">
            <!-- Title -->
            <h1 class="text-white">Create an account</h1>
            <p class="text-lead text-white">Projects Management Homepage</p>
        </b-col>
        </b-row>
      </div>
    </b-container>
    </div>


    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <!-- Register Table -->
      <b-row class="justify-content-center">
      <b-col lg="6" md="8" >
      <b-card no-body class="bg-secondary border-0">
        
        <!-- Register Form Title -->
        <b-card-header class="bg-transparent pb-1">
          <div class="text-muted text-center mt-2 mb-1">
            <h1>Register</h1>
          </div>  
        </b-card-header>
      
        <!-- Register Form -->
        <b-card-body class="px-lg-5 py-lg-5">
        <validation-observer v-slot="{handleSubmit}" ref="formValidator">
        <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                    
            <!-- Name Form -->
            <base-input alternative
                      class="mb-3"
                      name="name"
                      :rules="{required: true, min: 2, max:4}"
                      prepend-icon="ni ni-single-02"
                      placeholder="Name"
                      v-model="model.name"
                      v-on:keydown="onlyKoreaName"
                      v-on:keyup="onlyKoreaName"
            >
            </base-input>

            <!-- ID Form -->
            <base-input alternative
                      class="mb-3"
                      name="id"
                      :rules="{required: true, min: 6, max:15}"
                      prepend-icon="ni ni-key-25"
                      placeholder="ID"
                      v-model="model.id"
                      v-on:keydown="onlyEngNumId"
                      v-on:keyup="onlyEngNumId"
            >
            </base-input>

            <!-- PassWord Form -->
            <base-input alternative
                      class="mb-3"
                      name="password"
                      :rules="{required: true, min: 6, max:20}"
                      prepend-icon="ni ni-lock-circle-open"
                      type="password"
                      placeholder="Password"
                      v-model="model.password"
                      v-on:keydown="onlyEngNumPassword"
                      v-on:keyup="onlyEngNumPassword"
            >
            </base-input>

            <!-- PassWord Reconfirm Form -->
            <base-input alternative
                      class="mb-3"
                      name="reconfirm"
                      :rules="{required: true, min: 6, max:20}"
                      prepend-icon="ni ni-lock-circle-open"
                      type="password"
                      placeholder="Reconfirm"
                      v-model="model.reconfirm"
                      v-on:keydown="onlyEngNumReconfirm"
                      v-on:keyup="onlyEngNumReconfirm"
            >
            </base-input>

            <!-- Department Form -->
            <base-input lternative
                      class="mb-3"
                      name="select"
                      prepend-icon="ni ni-badge"
                      :rules="{required: true, min: 1}"
            >

              <!-- Select -->
              <select class="form-control" name="department" v-model="model.department" >
                    <option>Department</option>
                    <option>대표</option>
                    <option>R&D</option>
                    <option>스마트팜</option>
                    <option>영업마케팅</option>
                    <option>경영지원</option>
                    <option>물류</option>
              </select>
            </base-input>

            <!-- Submit Button -->   
            <div class="text-center">
              <b-button v-on:click="onlyInputOne" type="submit" variant="primary" class="mt-4">Create account</b-button>
            </div>

          </b-form>
          </validation-observer>
          </b-card-body>
      </b-card>
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
  name: 'register',
  data() {
    return {
      model: {
        name: '',
        id: '',
        password: '',
        reconfirm: '',
        department: 'Department'
      }
      
    }
  },
  methods: {
    // 서버에 회원가입 요청
    onSubmit() {
      console.log("Register Try");

      // 비밀번호 재확인 조건
      if(this.model.password == this.model.reconfirm) {
        // API: /registerTry
        axios({
            method: "POST",
            url: '/registerTry',
            data: {
              "name": this.model.name,
              "id": this.model.id,
              "pw": this.model.password,
              "department": this.model.department
            }
        })
        .then((response) => {
            console.log("Response Data: " + response.data);
            // 회원가입 성공 후 로그인 페이지 이동
            if(response.data == true) {
              this.$router.replace('login');
              
            }
            
            // 중복값 경고알림
            if(response.data == false) {
              Swal.fire({
                title: 'Error!',
                text: '중복되는 값이 존재합니다. \n이름, 아이디, 비밀번호 중에 값을 변경해주세요!',
                icon: 'error',
                confirmButtonText: '확인'
              });
            }
            
        })
        .catch((error) => {
            // 회원가입 실패 시 에러출력
            console.log("Error: " + error);
        });

        /*/ 새로고침
        setTimeout(function(){
          location.reload();
        },100);
        */
      }
      else {
        Swal.fire({
            title: 'Error!',
            text: '비밀번호가 일치하지 않습니다!',
            icon: 'error',
            confirmButtonText: '확인'
        });
      }
    },
    // 회원 이름 정규식
    onlyKoreaName(){
      console.log("Name: " + this.model.name);
      const reg = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/;
        if(reg.exec(this.model.name) == null){
          Swal.fire({
            title: 'Error!',
            text: '한글만 입력해주세요. (2자 ~ 4자 이내)',
            icon: 'error',
            confirmButtonText: '확인'
          });
          return this.model.name = this.model.name.slice(0,-1);
        }
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
      console.log("Password: " + this.model.password);
      const reg = /[^a-z0-9]/gi;
        if(reg.exec(this.model.password) !== null){
          Swal.fire({
            title: 'Error!',
            text: '영문, 숫자만 입력해주세요. (6자 ~ 15자 이내)',
            icon: 'error',
            confirmButtonText: '확인'
          });
          return this.model.password = this.model.password.slice(0,-1);
        }
    },
    // 회원 Password Refirm 정규식
    onlyEngNumReconfirm(){
      console.log("Reconfirm: " + this.model.reconfirm);
      const reg = /[^a-z0-9]/gi;
        if(reg.exec(this.model.reconfirm) !== null){
          Swal.fire({
            title: 'Error!',
            text: '영문, 숫자만 입력해주세요. (6자 ~ 15자 이내)',
            icon: 'error',
            confirmButtonText: '확인'
          });
          return this.model.reconfirm = this.model.reconfirm.slice(0,-1);
        }
    },
    // Submit 정규식
    onlyInputOne(){
      // LOG
      console.log("----------------------------------");
      console.log("- Registry Data - \n ");
      console.log(" ID: " + this.model.id);
      console.log(" Name: " + this.model.name);
      console.log(" Password: " + this.model.password);
      console.log(" Department: " + this.model.department + "\n");
      console.log("----------------------------------");
      

        // 입력값 비교확인 (Name, ID, Password, Department)
        if(this.model.name == ""){
          Swal.fire({
            title: 'Error!',
            text: '이름을 입력해주세요!',
            icon: 'error',
            confirmButtonText: '확인'
          })
        }
    
        else if(this.model.id == ""){
          Swal.fire({
            title: 'Error!',
            text: '아이디를 입력해주세요!',
            icon: 'error',
            confirmButtonText: '확인'
          })
        }

        else if(this.model.password == ""){
          Swal.fire({
            title: 'Error!',
            text: '비밀번호를 입력해주세요!',
            icon: 'error',
            confirmButtonText: '확인'
          })
        }
       
        else if((this.model.department) == "Department"){
          Swal.fire({
            title: 'Error!',
            text: '부서를 선택해주세요!',
            icon: 'error',
            confirmButtonText: '확인'
          })
        }
    }
    
  }

};
</script>

<style></style>
