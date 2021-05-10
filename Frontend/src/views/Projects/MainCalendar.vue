<template>
    <div class="mx-auto bg-none">
        <b-container class="text-center">
            <!-- Today, 부서, 05월, (Day/Week/Month) -->
            <b-row>
                <b-col>
                    <b-navbar toggleable="lg" type="dark" variant="default" class="navbar-horizontal" id="header_nav">
                        <!-- Today -->
                        <base-button size="sm" type="primary" id="today">Today</base-button>

                        <!-- 부서 -->
                        <select class="form-control" id="department"> 
                            <option>ALL</option>
                            <option>대표</option>
                            <option>R&D</option>
                            <option>스마트팜</option>
                            <option>영업마케팅</option>
                            <option>물류</option>
                            <option>경영지원</option>
                        </select> 
                    
                        <b-navbar-toggle target="nav-collapse" id="toggle"></b-navbar-toggle>

                        <!-- Day/Week/Month -->
                        <b-collapse id="nav-collapse" is-nav>
                            <!-- Right aligned nav items -->
                            <b-navbar-nav class="ml-auto">
                            <b-nav-form>
                                <b-button-group>
                                    <b-button variant="primary" class="buttons">
                                        Day
                                    </b-button>

                                    <b-button variant="outline-primary" class="buttons">
                                        Week
                                    </b-button>

                                    <b-button variant="outline-primary" class="buttons">
                                        Month
                                    </b-button>
                                </b-button-group>
                                
                            </b-nav-form>
                            </b-navbar-nav>
                        </b-collapse>

                    </b-navbar>

                </b-col>
            </b-row>
            <br />

            <b-row id="month_row" class="text-center">
                <b-col>
                </b-col>
                <b-col>
                </b-col>
                <b-col>
                </b-col>
                
               
                <b-col>
                    <!-- 05월 -->
                        <select class="form-control" id="month">
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select> 
                </b-col>
                <b-col>
                </b-col>
                <b-col>
                </b-col>
                <b-col>
                </b-col>
                
                
            </b-row>

            <!-- 현재 일수, 현재일수(+2/-2) -->
            <b-row >
                <b-col>
                    <base-button size="sm" id="before">◀</base-button>
                    <base-button size="sm" outline type="default" id="days">16</base-button>
                    <base-button size="sm" outline type="default" id="days">17</base-button>
                    <base-button type="default" id="day">18</base-button>
                    <base-button size="sm" outline type="default" id="days">19</base-button>
                    <base-button size="sm" outline type="default" id="days">20</base-button>
                    <base-button size="sm" id="after">▶</base-button>
                </b-col>
            </b-row>

            <!-- 프로젝트 제목 -->
            <b-row>
                <b-col>
                    <div class="projects">
                        <h3>Project Management</h3>
                        <b-progress :value="57" :max="max" show-progress animated class="progress"></b-progress>
                    </div>

                    <div class="projects">
                        <h3>Toy Project</h3>
                        <b-progress :value="32" :max="max" show-progress animated class="progress"></b-progress>
                    </div>

                    <div class="projects">
                        <h3>Git Hub</h3>
                        <b-progress :value="value" :max="max" show-progress animated class="progress"></b-progress>
                    </div>

                    <div class="projects">
                        <h3>로봇 청소기 관리</h3>
                        <b-progress :value="100" :max="max" show-progress animated class="progress"></b-progress>
                    </div>
                    
                    <div class="projects">
                        <h3>사내 협약식</h3>
                        <b-progress :value="28" :max="max" show-progress animated class="progress"></b-progress>
                    </div>
                    
                    <div class="projects">
                        <h3>웜데이</h3>
                        <b-progress :value="1" :max="max" show-progress animated class="progress"></b-progress>
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
    #header_nav {
        block-size: 4rem;
        border-radius: 5px 5px 5px 5px;
    }

    #today {
        margin: 0px;
        margin-right: 0.7%;
    }

    #department {
        float: left;
        width: 7em;
        margin: 0px;
        padding: 0px;
        font-weight: bold;
        background-color: #172b4d;
        color: white;
        border: 0px;
        margin-right: 1%;
    }

    #month {
        float: left;
        width: 5.4em;
        margin: 0px;
        padding: 0.4rem;
        padding-left: 1.5rem;
        font-weight: bold;
        background-color: #172b4d;
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
        border-radius: 5px 5px 5px 5px;
        block-size: 2.5rem;
        inline-size: 4rem;
    }

    #month_row {
        margin-bottom: 0.25rem;

    }

    #toggle {
        margin: 0px;
        padding: 0px;
        font-size: 1rem;
        float: right;
    }

    #nav-collapse {
        margin: 0px;
        padding: 0.1rem;
        width: 13rem;
    }

    #days {
        /* Sub Days */
        border-style: none;
        margin-right: 0.1rem;
        margin-left: 0.1rem;
        font-weight: bold;
    }

    #day {
        /* Main Day */
        margin-right: 0.1rem;
        margin-left: 0.1rem;
        font-weight: bold;
    } 

    #before {
        float: left;
        padding-top: 10px;
        padding-bottom: 10px;
        margin: 0px;
    }

    #after {
        float: right;
        padding-top: 10px;
        padding-bottom: 10px;
        margin: 0px;
    }

    .projects {
        background-color: rgb(255, 255, 255);
        border: black 1px solid;
        margin-bottom: 10px;
        margin-top: 10px;
        margin-right: 2em;
        margin-left: 2em;
    }

    .progress {
        margin-left: 20px;
        margin-right: 20px;
    }

    .buttons {
        block-size: 3em;
        inline-size: 5rem;
    }
    
</style>