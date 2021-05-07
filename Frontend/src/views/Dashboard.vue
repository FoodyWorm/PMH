<template>
  <div>
     <!-- Projects Content - main Start -->
    <base-header class="pb-5 pb-1 pt-5 pt-md-8 mx-auto bg-info bg-gradient-success">
      
      <MainCalendar></MainCalendar>
      
    </base-header>
    <!-- Projects Content - main End -->   


    <!-- Projects Content - Middle -->
    <b-container fluid class="mt--7">
      <b-row>
        

        
      </b-row>
      <!-- End Projects Content - Middle -->

      <!-- Move Tables -->
      <b-row class="mt-5">
        <b-col xl="8" class="mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </b-col>
        <b-col xl="4" class="mb-5 mb-xl-0">
          <social-traffic-table></social-traffic-table>
        </b-col>
      </b-row>
      <!--End tables-->

    </b-container>

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
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: 'Performance',
                data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
              }
            ],
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
      let me = this;
      setTimeout(function () {
        me.events = [ // you can make ajax call here
          {
            id:1,
            title:'Event 1',
            color: 'panel-danger',
            date: new Date()
          },     
        ];
      }, 1000);
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
