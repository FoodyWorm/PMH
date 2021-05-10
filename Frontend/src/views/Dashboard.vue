<template>
  <div>
     <!-- Projects Content - main Start -->
    <base-header class="pb-5 pb-1 pt-3 pt-md-8 mx-auto bg-info bg-gradient-success">
      <MainCalendar></MainCalendar>
      
    </base-header>
    <!-- Projects Content - main End -->   
    
  </div>
  
</template>
<script>
import MainCalendar from './Projects/MainCalendar.vue'

  export default {
    components: {
        MainCalendar
    },
    data() {
      return {
        
      };
    },
    methods: {
      
    },
    mounted() {
      
    }
  };
</script>





<style lang="scss" scoped>

// Basic //
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>
