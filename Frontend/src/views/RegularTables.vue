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
    <AddPage v-if="true" @close="showModal = false">
    </AddPage>

  </div>
</template>

<script>
/* eslint-disable */
  import { Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';
  import projects from './Tables/projects'
  import LightTable from "./Tables/RegularTables/LightTable";
  import AddPage from "./Tables/Modal/AddPage.vue";

  import Vue from 'vue';
  import Vuex from 'vuex';
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
        setProjects(state, payload) {
          console.log("Set Projects Now... (Title) ");
          state.projects = payload.projects;
        },
        showAddPage(state, value) {
          console.log("Show AddPage-Value: " + value);
          state.showAddPage_value = value;
        }
      }
  });

  export default {
    components: {
      LightTable,
      AddPage,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {
        projects,
        showModal: false
      };
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
</style>
