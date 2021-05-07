<template>
    <div>
        Main Calendar 입니다.
        <b-card no-body class="card-calendar">
        <!-- Card header -->
        <b-card-header >
            <!-- Title -->
            <h5 class="h3 mb-0">Calendar</h5>
        </b-card-header>
        <!-- Card body -->
        <b-card-body class="p-0 card-calendar-body">
            <full-calendar :events="events"
                        :plugins="calendarPlugins"
                        :editable="true"
                        contentHeight="auto"
                        :theme="false"
                        :selectable="true"
                        :selectHelper="true"
                        ref="fullCalendar"
                        class="calendar"
                        :defaultView="defaultView"
                        @dateClick="onDateClick"
                        @eventClick="onEventClick"
            >
            </full-calendar>
        </b-card-body>
        </b-card>
    </div>
    
</template>

<script>



export default {
    name: 'main-calendar',
    data: function () {
        return {
                
        }
    }
}
</script>ㄴ