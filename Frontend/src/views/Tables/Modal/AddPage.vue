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
            <base-button size="sm" outline type="default" id="remove_Button" @click="$emit('close')">
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
                        :rules="{required: true, min: 1, max:20}"
                        prepend-icon="ni ni-caps-small"
                        type="text"
                        label="Title"
                        placeholder="Title"
                        v-model="model.title"
            >
            </base-input>

            <!-- Department -->
            <base-input class="mb-0 mt-0"
                        name="Department"
                        :rules="{required: true, min: 1, max:20}"
                        prepend-icon="ni ni-badge"
                        type="select"
                        label="Department"
                        v-model="model.department"
            >
              <select class="form-control">
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
                        :rules="{required: true, min: 1, max:20}"
                        prepend-icon="ni ni-single-02"
                        type="text"
                        label="Users"
                        placeholder="Users"
                        v-model="model.users"
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
              v-model="model.purpose"
              placeholder="purpose..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>

            <!-- Submit Button -->
            <base-button type="primary" native-type="submit" class="my-4" id="submit">Add</base-button>

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
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  components: {flatPicker},
  data() {
      return {
        show: false,
        model: {
          title: '',
          department: '',
          users: '',
          startDay: '',
          endDay: '',
          purpose: ''
        }
      }
  },
  methods: {
    onSubmit() {
        // Submit
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
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 17rem;
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
