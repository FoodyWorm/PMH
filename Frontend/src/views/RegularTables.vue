<template>
<!-- Add -->
  <div>
    <!-- 상단 메뉴바 -->
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    </base-header>
    
    <!-- Projects Table -->
    <b-container fluid class="mt--9">
      <b-row>
        <b-col>
          <light-table/>
        </b-col>
      </b-row>

      <!-- 공백 추가하여 위치 조정 -->
      <div class="mt-5"></div>
    </b-container>

    <!-- Add Modal -->
    <AddPage v-if="showAddModal" @closeAdd="closeAddPage(false)">
    </AddPage>
    
    <!-- View Modal -->
    <ViewPage v-if="showViewModal" @closeView="closeViewPage(false)">
    </ViewPage>

  </div>
</template>

<script>
/* eslint-disable */
  import { Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';
  import projects from "./Tables/projects"
  import LightTable from "./Tables/RegularTables/LightTable";
  import AddPage from "./Tables/Modal/AddPage.vue";
  import ViewPage from "./Tables/Modal/ViewPage.vue";

  import Vue from "vue";
  import Vuex from "vuex";
  import createPersistedState from "vuex-persistedstate";
  Vue.use(Vuex); 

  // Vuex의 관리포인트 - Store: (state[상태 Data], mutations[상태변경-동기], actions[상태변경요청-비동기], getter[상태업로드])
  const store = new Vuex.Store({
      // 쿠키나 저장소를 활용하지 않아도 되도록, Vuex의 데이터를 자동으로 저장소에 저장해주는 플러그인
      plugins: [
        createPersistedState()
      ],
      // 동적인 상태의 데이터 및 함수 (commit호출)
      mutations: {
        showAddPage(state, payload) {
          console.log("Show AddPage-Value: " + payload.showValue);
          state.showAddPage_value = payload.showValue;
        },
        showViewPage(state, payload) {
          console.log("Show ViewPage-Value: " + payload.showValue);
          state.showViewPage_value = payload.showValue;
        }
      }
  }); 

  export default {
    components: {
      LightTable,
      AddPage,
      ViewPage,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {
        projects,
        showAddModal: this.$store.state.showAddPage_value,
        showViewModal: this.$store.state.showViewPage_value
      };
    },
    watch: {
      showAddModal: function() {
        this.showAddModal = this.$store.state.showAddPage_value
      },
      showViewModal: function() {
        this.showViewModal = this.$store.state.showViewPage_value
      }
    },
    methods: {
      closeAddPage(value) {
        console.log("Commit Data: " + value);
        // Vuex에 데이터 커밋
        store.commit('showAddPage', {
            showValue: value
        });
        // 새로고침
        setTimeout(function(){
          location.reload();
        },1);
      },
      closeViewPage(value) {
        console.log("Commit Data: " + value);
        // Vuex에 데이터 커밋
        store.commit('showViewPage', {
            showValue: value
        });
        // 새로고침
        setTimeout(function(){
          location.reload();
        },1);
      }
    }
  };  
</script>


<style>
.el-table.table-dark{
  background-color: #172b4d;
  color: #f8f9fe;
}

.el-table.table-dark th,
.el-table.table-dark tr{
  background-color: #172b4d;
}

.el-table.table-dark td,
.el-table.table-dark th.is-leaf{
  border-bottom: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
}
</style>
