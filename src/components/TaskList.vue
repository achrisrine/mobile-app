<template>
  <div class="task-list">
    <div class="tasks-header">
      <h3 @click="toggleTaskList" class="block-title">
        {{
          isTaskListCollapsed
            ? "Показать список задач"
            : "Список задач на сегодня:"
        }}
        <span
          :class="{
            'arrow-down': isTaskListCollapsed,
            'arrow-up': !isTaskListCollapsed,
          }"
        ></span>
      </h3>
      <button @click="addTask" class="add-button">
        <img src="../assets/add-icon.svg" alt="Добавить" />
      </button>
    </div>
    <div v-if="!isTaskListCollapsed" class="task-list-content">
      <div v-for="task in tasksForSelectedDate" :key="task.id" class="task-item">
        <button
          @click="toggleComplete(task)"
          class="task-checkbox"
          :class="{ completed: task.completed }"
        >
          <span v-if="task.completed">✓</span>
        </button>
        <span class="task-text" :class="{ completed: task.completed }">
          <span v-if="task.isNotification" class="notification-mark"></span>
          {{ task.text }}
        </span>
      </div>
    </div>
    <div v-if="showAddTaskModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeAddTaskModal">&times;</span>
        <input type="text" v-model="newTaskText" placeholder="Введите новую задачу" />
        <button @click="saveNewTask">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskList",
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
      showAddTaskModal: false,
      newTaskText: "",
      nextTaskId: 4,
      isTaskListCollapsed: false,
    };
  },
  computed: {
    selectedDateKey() {
        return this.selectedDate.toISOString().split('T')[0];
    },
    tasksForSelectedDate() {
         return this.tasks[this.selectedDateKey] || []
    },
  },
  methods: {
    toggleTaskList() {
      this.isTaskListCollapsed = !this.isTaskListCollapsed;
    },
    toggleComplete(task) {
      task.completed = !task.completed;
    },
    addTask() {
      this.showAddTaskModal = true;
    },
    closeAddTaskModal() {
      this.showAddTaskModal = false;
      this.newTaskText = "";
    },
    saveNewTask() {
      if (this.newTaskText) {
        if (!this.tasks[this.selectedDateKey]) {
          this.$emit('update-tasks', this.tasks, this.selectedDateKey, [])
        }
          this.$emit('update-tasks', this.tasks, this.selectedDateKey,
            [...this.tasks[this.selectedDateKey] || [], {
            id: this.nextTaskId++,
            text: this.newTaskText,
            completed: false,
            isNotification: false,
          }])
        this.closeAddTaskModal();
      }
    },
  },
};
</script>

<style scoped>
.task-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 10px;
  box-sizing: border-box;
    margin-bottom: 20px;
}
.tasks-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
}
.block-title {
  display: flex;
  align-items: center;
  font-size: 1.1em;
  font-weight: 500;
  cursor: pointer;
  color: #333;
  transition: color 0.2s ease;
  user-select: none;
  margin-bottom: 0;
}

.block-title:hover {
  color: #666;
}
.arrow-down {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #333;
  margin-left: 5px;
  transition: transform 0.2s ease;
}

.arrow-up {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #333;
  margin-left: 5px;
  transform: rotate(180deg);
  transition: transform 0.2s ease;
}
    .task-list-content {
        width: 100%;
    padding: 10px 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    }
.task-item {
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.task-item:last-child {
  border-bottom: none;
}
.task-checkbox {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
}

.task-checkbox.completed {
  background-color: #4caf50;
  border-color: #4caf50;
  color: white;
}

.task-text {
  flex: 1;
  color: #333;
}
.task-text.completed {
  color: #aaa;
  text-decoration: line-through;
}

.notification-mark {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #4caf50;
  margin-right: 5px;
}
.add-button {
  background: none;
  border: none;
  cursor: pointer;
}
.add-button img {
  width: 20px;
  height: 20px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 90%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
}
.close {
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  margin-left: auto;
  margin-bottom: .1em;
}
.modal-content input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.modal-content button {
  padding: 10px 20px;

  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
    background-color: #9B9CA7;
}
</style>