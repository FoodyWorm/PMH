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
                <h1>FoodyWorm</h1>
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
                              :rules="{required: true, min: 10, max:15}"
                              prepend-icon="ni ni-key-25"
                              placeholder="ID"
                              v-model="model.id"
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
                              v-model="model.password">
                  </base-input>

                  <!-- Submit Button -->
                  <div class="text-center">
                    <base-button type="primary" native-type="submit" class="my-4">Sign in</base-button>
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
    onSubmit() {
        // Login Submit Fuction Here
    }
  }
};
</script>

<style></style>