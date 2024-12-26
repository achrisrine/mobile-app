<template>
  <div class="calendar">
    <div class="calendar-header">
      <button @click="prevMonth">&lt;</button>
      <span class="month-name">{{ currentMonthName }} {{ currentYear }}</span>
      <button @click="nextMonth">&gt;</button>
    </div>
    <div class="weekdays">
      <div v-for="day in weekdays" :key="day">{{ day }}</div>
    </div>
    <div class="days">
      <div
        v-for="day in daysInMonthWithEmpty"
        :key="day"
        :class="{
          'current-day': isCurrentDay(day),
          'selected-day': isSelectedDay(day),
           'has-tasks': hasTasks(day)
        }"
        @click="selectDay(day)"
      >
        {{ day }}
      </div>
    </div>
    <div v-if="selectedDateTasks.length > 0" class="tasks-preview">
        <div v-for="task in selectedDateTasks" :key="task.id" class="preview-item" >
            {{task.text}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  props: {
      selectedDate: {
        type: Date,
        required: true,
      },
      tasks: {
          type: Object,
          required: true
      },
      toggleDate: {
          type: Function,
          required: true
      }
  },
  data() {
    return {
      currentDate: new Date(),
    };
  },
    computed: {
        selectedDateKey() {
          return this.selectedDate.toISOString().split('T')[0];
      },
        selectedDateTasks(){
            return this.tasks[this.selectedDateKey] || []
        },
    currentMonth() {
      return this.currentDate.getMonth();
    },
    currentYear() {
      return this.currentDate.getFullYear();
    },
    currentMonthName() {
      return this.currentDate.toLocaleString("default", { month: "long" });
    },
    firstDayOfMonth() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
      weekdays() {
      return ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    },
    daysInMonthWithEmpty() {
      const days = Array.from(
        { length: this.firstDayOfMonth === 0 ? 6 : this.firstDayOfMonth - 1 },
        () => null
      );
      for (let i = 1; i <= this.daysInMonth; i++) {
        days.push(i);
      }
      return days;
    },
  },
  methods: {
    hasTasks(day) {
         if(day === null) return false
      const date = new Date(this.currentYear, this.currentMonth, day);
      const dateKey = date.toISOString().split("T")[0];
      return !!this.tasks[dateKey];
    },
    isCurrentDay(day) {
        if(day === null){
            return false;
        }
      const today = new Date();
      return (
        day === today.getDate() &&
        this.currentMonth === today.getMonth() &&
        this.currentYear === today.getFullYear()
      );
    },
    isSelectedDay(day) {
        if(day === null){
            return false
        }
      return (
        day === this.selectedDate.getDate() &&
        this.currentMonth === this.selectedDate.getMonth() &&
        this.currentYear === this.selectedDate.getFullYear()
      );
    },
    prevMonth() {
      this.currentDate = new Date(this.currentYear, this.currentMonth - 1, 1);
    },
    nextMonth() {
      this.currentDate = new Date(this.currentYear, this.currentMonth + 1, 1);
    },
     selectDay(day) {
        if(day !== null){
             this.$emit('update-date', new Date(this.currentYear, this.currentMonth, day))
        }
     },
  },
};
</script>

<style scoped>
.calendar {
    width: 100%;
    max-width: 300px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    margin: 10px auto;
    box-sizing: border-box;
}

.calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    text-align: center;
}

.calendar-header button {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
}
.month-name {
    font-weight: bold;
    font-size: 1.1rem;
}

.weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    margin-bottom: 5px;
}

.weekdays div {
    padding: 5px;
    color: #666;
}

.days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
}

.days div {
    padding: 5px;
    border: 1px solid #eee;
    cursor: pointer;
}

    .has-tasks{
        position: relative;
    }

    .has-tasks::after {
        content: '';
        position: absolute;
        bottom: 4px;
        left: 50%;
        transform: translateX(-50%);
        width: 3px;
        height: 3px;
        background-color: #4caf50;
        border-radius: 50%;
    }

.days div:hover {
    background-color: #f0f0f0;
}
.current-day {
    background-color: #4caf50;
    color: white;
}
.selected-day {
    background-color: #007bff;
    color: white;
    border: 1px solid #007bff
}
    .tasks-preview {
        padding: 5px;
        border-top: 1px solid #eee;
        font-size: 0.9em;
        color: #666;
        overflow: hidden;
    }

    .preview-item {
        padding: 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-bottom: 1px solid #f0f0f0;
    }
    .preview-item:last-child {
        border-bottom: none
    }
</style>