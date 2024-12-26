<template>
  <div class="patient-dashboard">
    <HeaderPatientDashboard />
    <div class="content-container">
      <TaskList :selectedDate="selectedDate" :tasks="tasks" @update-tasks="updateTasks"  />
      <div class="calendar-container">
        <Calendar :selectedDate="selectedDate" :tasks="tasks" @update-date="updateDate" />
      </div>
      <StatusDisplay />
    </div>
    <BottomNavigation />
  </div>
</template>

<script>
import TaskList from "../components/TaskList.vue";
import Calendar from "../components/Calendar.vue";
import StatusDisplay from "../components/StatusDisplay.vue";
import HeaderPatientDashboard from "../components/HeaderPatientDashboard.vue";
import BottomNavigation from "../components/BottomNavigation.vue";
export default {
  name: "PatientDashboard",
  components: {
    TaskList,
    Calendar,
    StatusDisplay,
    HeaderPatientDashboard,
    BottomNavigation,
  },
  data(){
    return {
        selectedDate: new Date(),
       tasks: {
            "2024-06-18": [
                { id: 1, text: "Почистить зубы", completed: false, isNotification: false },
                { id: 2, text: "Сделать КТ", completed: false, isNotification: false },
                {
                    id: 3,
                    text:
                        "Системное оповещение: Пора записаться на профессиональную гигиену: Дата последнего приема 17.06.24",
                    completed: true,
                    isNotification: true
                },
            ],
            "2024-06-19": [{ id: 1, text: "Купить зубную пасту", completed: true , isNotification: false}],
            "2024-06-21": [{ id: 1, text: "Посетить стоматолога", completed: false, isNotification: false }],
        }
    }
  },
    methods: {
     updateDate(date) {
        this.selectedDate = date
     },
     updateTasks(tasks, selectedDateKey, updatedTasks){
         this.tasks[selectedDateKey] = updatedTasks
     }
    }
};
</script>
<style scoped>
.patient-dashboard {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: sans-serif;
}
.content-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.calendar-container {
  margin-bottom: 20px;
}
</style>