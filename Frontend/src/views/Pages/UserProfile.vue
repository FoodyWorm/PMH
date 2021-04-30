<template>
  <div>
    <!-- Profile Header -->
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header"
        style="min-height: 600px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
      <b-container fluid>
        <!-- Mask: 배경 그라데이션 조절 -->
        <span class="mask bg-gradient-success opacity-8"></span>

        <!-- Header Content -->
        <b-container fluid class="d-flex align-items-center">
          <b-row >
          <b-col lg="7" md="10">
              <!-- Content -->
              <h1 class="display-2 text-white">Hello</h1>
              <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your
                work and manage your projects or assigned tasks</p>

              <!-- Edit profile Button -->
              <a href="#!" class="btn btn-info">Edit profile</a>
          </b-col>
          </b-row>
        </b-container>

      </b-container>
    </div>

    <!-- Profile Content -->
    <b-container fluid class="mt--6">
      <!-- Content -->
      <b-row>
        <b-col xl="4" class="order-xl-2 mb-5">
          <!-- Connect, Image, Message, Friends, Photos, Comments, Info... -->
          <user-card></user-card>
        </b-col>
        
        <b-col xl="8" class="order-xl-1">
          <!-- Edit Profile, Settings, Username, Address, About Me... -->
          <edit-profile-form></edit-profile-form>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
/* eslint-disable */
  import EditProfileForm from './UserProfile/EditProfileForm.vue';
  import UserCard from './UserProfile/UserCard.vue';

  export default {
    components: {
      EditProfileForm,
      UserCard
    }
  };
</script>

<style></style>
