<template>
<div>
    <b-card no-body id="main_div">
        <!-- Header 제목 & 설정 -->
        <b-card-header class="border-0" id="Header">
            <!-- 제목 -->
            <span id="table_Label">Projects</span>
         
            <!-- 설정 -->
            <b-dropdown right size="sm" text="Small" id="setting" class="mr-5">
                <template v-slot:button-content>
                    <i class="ni ni-settings-gear-65"></i>
                </template>
                <b-dropdown-item id="show-modal" v-on:click="showModal = true">ADD</b-dropdown-item>
                <b-dropdown-item href="#">View</b-dropdown-item>
                <b-dropdown-item href="#">Schedules</b-dropdown-item>
            </b-dropdown>
        </b-card-header>

        <!-- Content 테이블 속성 & 크기 -->
        <el-table class="table-responsive table mt-4 pt-1"
                  header-row-class-name="thead-light"
                  v-bind:data="projects">
                  <span>Projects: {{ projects }}</span>

            <!-- 테이블 컬럼 (Check) -->
            <el-table-column label="Check"
                             min-width="110px"
                             prop="project_check"
                             v-slot:default="{row}">
                <div class="ml-1">
                    <input class="checkBox ml-1" name="checkBox" type="checkbox" v-on:click="checkSubmit(row.project_check, row.project_index)" />
                    <span v-if="true">{{ row.project_check }}</span>
                </div>
             </el-table-column>


            <!-- 테이블 컬럼 (Project Title) -->
            <el-table-column label="Project Title"
                             prop="project_title"
                             min-width="310px"
                             v-slot="{row}">
                             <span class="title" v-bind:style="row.project_check == 1 ? {'text-decoration': 'line-through'} : {'text-decoration': 'none'}">{{ row.project_title }}</span>
            </el-table-column>


            <!-- 테이블 컬럼 (Status) -->
            <el-table-column label="Status"
                             min-width="150px"
                             prop="project_status"
                             v-slot="{row}">
                             <badge class="badge-dot mr-4" type="">
                                <i :class="`bg-${row.project_statusType}`"></i>
                                <span class="status" :class="`text-${row.project_statusType}`">{{ row.project_status }}</span>
                             </badge>
            </el-table-column>


            <!-- 테이블 컬럼 (Users) -->
            <el-table-column label="Users"
                             min-width="120px"
                             prop="project_users"
                             v-slot="{row}">
                             {{ row.project_users }}
            </el-table-column>


            <!-- 테이블 컬럼 (Completion) -->
            <el-table-column label="Completion"
                             min-width="240px"
                             prop="project_completion"
                             v-slot="{row}">
                             <div class="d-flex align-items-center">
                                <div>
                                    <base-progress :type="row.project_statusType" :value="row.project_completion"/>
                                </div>
                                <span class="completion ml-2">{{ row.project_completion }}%</span>
                             </div>
            </el-table-column>


            <!-- 테이블 컬럼  (Delete) -->
            <el-table-column label="Delete"
                             min-width="120px"
                             prop="delete" >
                <!-- 내용 -->
                <template slot-scope="deleted">
                    <base-button class="ml-2" native-type="submit" size="sm" outline type="default" id="remove_Btn" v-on:click.native.prevent="deleteRow(deleted.$index, projects)">
                        <i class="ni ni-fat-remove ml-1" id="remove"></i>
                    </base-button>
                </template>
            </el-table-column>
        </el-table>

    </b-card>
    <!-- Add Modal -->
    <AddPage v-if="showModal" @close="showModal = false">
    </AddPage>
</div>
</template>


<script>
/* eslint-disable */
//import projects from './../projects'
import { Table, TableColumn } from 'element-ui';
import BaseCheckbox from '../../../components/Inputs/BaseCheckbox.vue';
import BaseButton from '../../../components/BaseButton.vue';
import AddPage from "../Modal/AddPage.vue";
import axios from 'axios';
import Swal from 'sweetalert2';
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
      }
    }
});


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
            currentPage: 1,
            showModal: false,
            projects: this.$store.state.projects
        }
    },
    methods: {
        checkSubmit(checked, index) {
            // CheckSubmit Start - Console() //
            console.log("------------------- Checked -------------------");
            // 데이터 확인
            var temp_Checked = checked == 0? (1) : (0);
            console.log("before checked: " + checked);
            console.log("After checked: " + temp_Checked);
            console.log("index: " + index);

            // 체크값 저장하기 시도 //
            console.log("/checkProjectTry...");
            // API: /checkProjectTry
            axios({
                method: "PUT",
                url: '/checkProjectTry',
                data: {
                    "project_checked": temp_Checked,
                    "project_index": index
                }
            })
            .then((response) => {
                console.log("---------------- CheckTry(PUT) ----------------");
                console.log("Response Data: " + response.data);
                // 프로젝트 체크 성공 후 페이지 새로고침
                if(response.data == true) {
                    // Get Projects
                    axios({
                        method: "get",
                        url: '/projectGetTry'
                    
                    }).then((response) => {
                        // Todo Save - Vuex
                        console.log("Get Projects: " + response.data);
                        console.log("Set Projects to Vuex...");

                        // Vuex에 데이터 커밋
                        store.commit('setProjects', {
                            projects: response.data
                        });

                        //새로고침
                        setTimeout(function(){
                           location.reload();
                        },0.1);
                    }).catch((error) => {
                        console.log("Error: " + error);
                    }); 
                }
                console.log("-----------------------------------------------");
                console.log(" ");
            })
            .catch((error) => {
                // 프로젝트 추가 실패 시 에러출력
                console.log("Error: " + error);
            });
    
            // CheckSubmit End - Console()
            console.log("-----------------------------------------------");
        },
        deleteRow(index, rows) {
            // 데이터베이스 데이터 삭제
            axios({
                method: "DELETE",
                url: '/deleteProject',
                data: {
                    "index": this.$store.state.projects[index].project_index
                } 
            })
            .then((response) => {
                console.log("삭제여부: " + response.data);
                Swal.fire({
                    title: 'success!',
                    text: '삭제되었습니다.',
                    icon: 'success',
                    confirmButtonText: '확인'
                });
            })
            .catch((error) => {
                console.log("Error: " + error);
            });

            // 테이블 데이터 삭제
            rows.splice(index, 1);
            var temp = this.$store.state.projects
            
            // Vuex 데이터 삭제
            console.log("before: " + temp[index]);
            temp.splice(index, 0);

            console.log("after: " + temp[index]);
            store.commit('setProjects', {
                projects: temp
            });
        }
    },
    mounted() {
        // 모든 화면이 렌더링된 후 실행합니다.
        this.$nextTick(function () {
            // Mounted Start - Console()
            console.log("------------------- Mounted -------------------");
            console.log("Projects: " + this.$store.state.projects);

            // Table - project_check
            var checkBox = document.getElementsByName('checkBox');
            console.log("Checkbox: " + checkBox);
            console.log("Chekcbox.length: " + checkBox.length);

            // Before CheckBox
            for(var i=0; i<checkBox.length; i++) {
                console.log("Before CheckBox[" + i + "]: " + checkBox[i].checked);
            }

            // Change CheckBox
            for(var i=0; i<checkBox.length; i++) {
                    if(this.$store.state.projects[i].project_check == 0) {
                        // Check False
                        console.log("Change False[" + i +"]");
                        checkBox[i].checked = false;
                        
                    }
                    
                    if(this.$store.state.projects[i].project_check == 1) {
                        // Check True
                        console.log("Change True[" + i +"]");
                        checkBox[i].checked = true;
                    }
            }

            // After CheckBox
            for(var i=0; i<checkBox.length; i++) {
                console.log("After CheckBox[" + i + "]: " + checkBox[i].checked);
            }

            // Mounted End - Console()
            console.log("-----------------------------------------------");
            console.log(" ");
        });
    }
}
</script>


<style scoped>
#main_div {
    padding-top: 0.5rem;
}

#Header {
    display: inline;
    block-size: 0%;
}

#table_Label {
    margin: 0px;
    padding: 0px;
    font-size: 1.2rem;
    font-weight: bold;
}

.checkBox {
    width: 1rem;
    height: 1rem;
}

.title {
    font-size: 0.9rem;
    /* text-decoration: line-through; */
}

#setting {
    float: right;
    margin: 0px;
    padding: 0px;
    block-size: 0px;
    inline-size: 0px;
    width: 0px;
    height: 0px;
    border: 0px;
    box-shadow: 0px;
    background-color: rgb(165, 67, 67);
    border: 0px solid white;
    box-shadow: none;
}

#setting-button {
    margin: 0px;
    padding: 0px;
    block-size: 0px;
    inline-size: 0px;
    width: 0px;
    height: 0px;
    border: 0px;
    box-shadow: 0px;
}

#remove_Btn {
    border-style: none;
    margin-left: 1.2rem;
    padding: 0px;
}

#remove {
    font-size: 1.2rem;
    
}

.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #f0f9eb;
}


</style>