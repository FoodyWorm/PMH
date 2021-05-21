<template>
  <div id="header">
    <!-- Projects Content - main Start -->
    <base-header class="pb-9 pt-md-7 mx-auto bg-info bg-gradient-success">
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
    }
  };
</script>

<style lang="scss" scoped>

// Basic //
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}

#header {
  margin: 0px;
  padding: 0px;
}
</style>
