<template>
    <b-card no-body>
        <!-- Header 제목 & 설정 -->
        <b-card-header class="border-0 mb-5" id="Header">
            <!-- 제목 -->
            <span id="title">Projects</span>

            <!-- 설정 -->
            <b-dropdown right id="setting">
              <template v-slot:button-content>
                <i class="ni ni-settings-gear-65 mb-0 mt-0"></i>
                <span class="nav-link-inner--text d-lg-none">Settings</span>
                
              </template>
                <b-dropdown-item id="show-modal" @click="showModal = true">ADD</b-dropdown-item>
                <b-dropdown-item href="#">View</b-dropdown-item>
                <b-dropdown-item href="#">Schedules</b-dropdown-item>
            </b-dropdown>
        </b-card-header>


        <!-- 테이블 속성 및 크기 -->
        <el-table class="table-responsive table"
                  header-row-class-name="thead-light"
                  :data="projects">

            <!-- 테이블 컬럼 및 제목 (Status) -->
            <el-table-column label="Check"
                             min-width="110px"
                             prop="Check">
                <!-- 내용 -->
                <template>
                    <div class="d-flex align-items-center ml-2">
                       <base-checkbox></base-checkbox>
                    </div>
                </template>
            </el-table-column>

            <!-- 테이블 컬럼 및 제목 (Project Title) -->
            <el-table-column label="Project Title"
                             min-width="310px"
                             prop="name">
                <!-- 내용 -->
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{row.title}}</span>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column>


            <!-- 테이블 컬럼 및 제목 (Status) -->
            <el-table-column label="Status"
                             min-width="150px"
                             prop="status">
                <!-- 내용 -->
                <template v-slot="{row}">
                    <badge class="badge-dot mr-4" type="">
                        <i :class="`bg-${row.statusType}`"></i>
                        <span class="status" :class="`text-${row.statusType}`">{{row.status}}</span>
                    </badge>
                </template>
            </el-table-column>


            <!-- 테이블 컬럼 및 제목 (Users) -->
            <el-table-column label="Users" min-width="120px">
                <!-- 내용 -->
                <div class="avatar-group">
                    <div>김장은</div>
                    
                </div>
            </el-table-column>


            <!-- 테이블 컬럼 및 제목 (Completion) -->
            <el-table-column label="Completion"
                             prop="completion"
                             min-width="240px">
                <!-- 내용 -->
                <template v-slot="{row}">
                    <div class="d-flex align-items-center">
                        <span class="completion mr-2">{{row.completion}}%</span>
                        <div>
                            <base-progress :type="row.statusType" :value="row.completion"/>
                        </div>
                    </div>
                </template>
            </el-table-column>

            <!-- 테이블 컬럼 및 제목 (Completion) -->
            <el-table-column label="Delete"
                             prop="Delete"
                             min-width="120px">
                <!-- 내용 -->
                <template>
                    <base-button size="sm" outline type="default" id="remove_Button">
                        <i class="ni ni-fat-remove" id="remove"></i>
                    </base-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- Add Modal -->
        <AddPage v-if="showModal" @close="showModal = false">
        </AddPage>
        
    </b-card>

    
</template>

<script>
/* eslint-disable */
/*   JavaScript   */

import projects from './../projects'
import { Table, TableColumn} from 'element-ui'
import BaseCheckbox from '../../../components/Inputs/BaseCheckbox.vue';
import BaseButton from '../../../components/BaseButton.vue';
import AddPage from "../Modal/AddPage.vue";
    
  
  export default {
    // 사용시 태그 이름: <light-table />
    name: 'light-table',
    components: {
        BaseCheckbox,
        BaseButton,
        AddPage,
        [Table.name]:Table,
        [TableColumn.name]: TableColumn
    },
    data() {
      return {
        projects,
        currentPage: 1,
        showModal: false
      }
    }
  }
  
</script>

<style scoped>
#Header {
    display: inline;
    block-size: 0%;
}

#title {
    font-size: 1.5rem;
    font-weight: bold;
}

#setting {
    float: right;
}

#remove_Button {
    border-style: none;
    margin-left: 0.8rem;
}

#remove {
    font-size: 1rem;

}



</style>