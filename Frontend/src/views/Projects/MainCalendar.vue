<template>
    <div class="mx-auto bg-none">
        <br />
        <b-container class="text-center pb-5 md-6 mx-auto" id="main-container" fluid="md">
            <!-- 프로젝트 헤더 -->
            <b-row id="header_nav">
                    <!-- 오늘 -->
                    <b-col fluid="sm" cols="3" md="1" class="text-center mt-3 md-4 d-none d-lg-inline-block" mx-auto>
                        <!-- Today -->
                        <base-button class="text-center" id="today" type="success">TODAY</base-button>
                    </b-col>

                    <!-- 년, 월, 일 -->
                    <b-col fluid="sm" cols="12" md="11" class="text-center mt-3 md-4" mx-auto>
                        <!-- Year -->
                        <span class="text-center mt-2 d-none d-lg-inline-block" id="year">2021년</span>
                            
                        <!-- Month -->
                        <select class="form-control text-center" id="month">
                            <option>01월</option>
                            <option>02월</option>
                            <option>03월</option>
                            <option>04월</option>
                            <option>05월</option>
                            <option>06월</option>
                            <option>07월</option>
                            <option>08월</option>
                            <option>09월</option>
                            <option>10월</option>
                            <option>11월</option>
                            <option>12월</option>
                        </select>

                        <!-- Day -->
                        <select class="form-control text-center" id="day">
                            <option>01일</option>
                            <option>02일</option>
                            <option>03일</option>
                            <option>04일</option>
                            <option>05일</option>
                            <option>06일</option>
                            <option>07일</option>
                            <option>08일</option>
                            <option>09일</option>
                            <option>10일</option>
                            <option>11일</option>
                            <option>12일</option>
                            <option>13일</option>
                            <option>14일</option>
                            <option>15일</option>
                            <option>16일</option>
                            <option>17일</option>
                            <option>18일</option>
                            <option>19일</option>
                            <option>20일</option>
                            <option>21일</option>
                            <option>22일</option>
                            <option>23일</option>
                            <option>24일</option>
                            <option>25일</option>
                            <option>26일</option>
                            <option>27일</option>
                            <option>28일</option>
                            <option>29일</option>
                            <option>30일</option>
                            <option>31일</option>
                        </select>

                        <!-- Department -->
                        <b-nav-item-dropdown right id="department" class="mt-1 md-0" mx-auto>
                                <template v-slot:button-content>
                                    <i class="ni ni-settings-gear-65"></i>
                                </template>
                                <b-dropdown-item href="#">ALL</b-dropdown-item>
                                <b-dropdown-item href="#">대표</b-dropdown-item>
                                <b-dropdown-item href="#">R&D</b-dropdown-item>
                                <b-dropdown-item href="#">스마트팜</b-dropdown-item>
                                <b-dropdown-item href="#">영업마케팅</b-dropdown-item>
                                <b-dropdown-item href="#">물류</b-dropdown-item>
                                <b-dropdown-item href="#">경영지원</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-col>
            </b-row>

            <!-- 프로젝트 제목 -->
            <b-row>
                <b-col>
                    <div class="projects ">
                        <h3>Project Management</h3>
                        <b-progress variant="success" :value="57" :max="max" show-progress ></b-progress>
                    </div>

                    <div class="projects">
                        <h3>Toy Project</h3>
                        <b-progress variant="success" :value="32" :max="max" show-progress></b-progress>
                    </div>

                    <div class="projects">
                        <h3>Git Hub</h3>
                        <b-progress variant="success" :value="value" :max="max" show-progress></b-progress>
                    </div>

                    <div class="projects">
                        <h3>로봇 청소기 관리</h3>
                        <b-progress variant="success" :value="100" :max="max" show-progress></b-progress>
                    </div>
                    
                    <div class="projects">
                        <h3>사내 협약식</h3>
                        <b-progress variant="success" :value="28" :max="max" show-progress></b-progress>
                    </div>
                    
                    <div class="projects">
                        <h3>웜데이</h3>
                        <b-progress variant="success" :value="1" :max="max" show-progress></b-progress>
                    </div>

                </b-col>
            </b-row>

        </b-container>
    </div>
</template>


<script>
/* eslint-disable */
import BaseButton from '../../components/BaseButton.vue'
import BaseTable from '../../components/BaseTable.vue'

export default {
  components: { BaseTable, BaseButton },
    name: 'main-calendar',
    data: function () {
        return {
            value: 45,
            max: 100
        }
    },
    methods: {
      randomValue() {
        this.value = Math.random() * this.max;
      }
    }
}
</script>


<style scoped>
/* eslint-disable */
    #main-container {
        background: linear-gradient( to right, #333333);
        border-radius: 15px 15px 15px 15px;
        margin: 0px;
        padding: 0px;
    }

    #header_nav {
        block-size: 4.5rem;
        border-radius: 15px 15px 0px 0px;
        margin: 0px;
        padding: 0px;
        background: linear-gradient( to right, #66CC33);

    }

    #today {
        float: left;
        margin: 0px;
        margin-right: 0.7%;
        background-color: #66CC33;
        border-style: none;
        box-shadow: none;
    }

    #year {
        float: left;
        display: inline;
        margin: 0px;
        margin-right: 0.3rem;
        padding: 0px;
        font-weight: bold;
        background-color: #66CC33;
        color: white;
        font-size: 1rem;
    }

    #month {
        float: left;
        display: inline;
        margin: 0px;
        padding: 0.4rem;
        font-weight: bold;
        background-color: #66CC33;
        color: white;
        border: 0px;
        border-radius:0; 
        /* 아이폰 사파리 보더 없애기 */ 
        -webkit-appearance:none; 
        /* 화살표 없애기 for chrome*/ 
        -moz-appearance:none; 
        /* 화살표 없애기 for firefox*/ 
        appearance:none;
        /* 화살표 없애기 공통*/ 
        
        font-size: 1rem;
        block-size: 2.5rem;
        inline-size: 2.9rem;

    }

    #day {
        float: left;
        display: inline;
        margin-right: 0px;
        padding: 0.4rem;
        font-weight: bold;
        background-color: #66CC33;
        color: white;
        border: 0px;
        border-radius:0; 
        /* 아이폰 사파리 보더 없애기 */ 
        -webkit-appearance:none; 
        /* 화살표 없애기 for chrome*/ 
        -moz-appearance:none; 
        /* 화살표 없애기 for firefox*/ 
        appearance:none;
        /* 화살표 없애기 공통*/ 
        
        font-size: 1rem;
        block-size: 2.5rem;
        inline-size: 4rem;
    }

    #department {
        float: right;
    }

    .projects {
        border: 1px black solid;
        background-color: #ffffff;
        margin-bottom: 10px;
        margin-top: 25px;
        margin-right: 2em;
        margin-left: 2em;
    }

    h3 {
        color: rgb(0, 0, 0);    
    }

    .progress {
        margin-left: 20px;
        margin-right: 20px;
        background-color: #e9ecef;
    }

    .buttons {
        block-size: 3em;
        inline-size: 5rem;
        color: white;
    }

</style>