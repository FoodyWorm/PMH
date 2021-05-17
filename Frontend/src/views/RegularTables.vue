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

  </div>
</template>

<script>
  import { Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';
  import projects from './Tables/projects'
  import LightTable from "./Tables/RegularTables/LightTable";
  

  export default {
    components: {
      LightTable,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {
        projects
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
