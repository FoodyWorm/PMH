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
            <h1>Sign Up</h1>
          </div>  
        </b-card-header>
      
        <!-- Register Form -->
        <b-card-body class="px-lg-5 py-lg-5">
        <validation-observer v-slot="{handleSubmit}" ref="formValidator">
        <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                    
            <!-- Name Form -->
            <base-input alternative
                      class="mb-3"
                      prepend-icon="ni ni-hat-3"
                      placeholder="Name"
                      name="Name"
                      :rules="{required: true}"
                      v-model="model.name">
            </base-input>

            <!-- ID Form -->
            <base-input alternative
                      class="mb-3"
                      name="ID"
                      :rules="{required: true, id: true, min: 10, max:15}"
                      prepend-icon="ni ni-key-25"
                      placeholder="ID"
                      v-model="model.id">
            </base-input>

            <!-- PassWord Form -->
            <base-input alternative
                      class="mb-3"
                      name="Password"
                      :rules="{required: true, min: 6, max:20}"
                      prepend-icon="ni ni-lock-circle-open"
                      type="password"
                      placeholder="password"
                      v-model="model.password">
            </base-input>

            <!-- Department -->
            <base-input>
            <select class="form-control" name="department">
                  <option>부서선택</option>
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
            <b-button type="submit" variant="primary" class="mt-4">Create account</b-button>
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
export default {
  name: 'register',
  data() {
    return {
      model: {
        name: '',
        id: '',
        password: '',
        department: ''
        
      }
    }
  },
  methods: {
    onSubmit() {
       // Register Submit Fuction Here
    }
  }
};
</script>

<style></style>
