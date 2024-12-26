<template>
  <div class="status-display">
    <div class="list-header">
      <h3 @click="toggleBlock" class="block-title">
        {{ isCollapsed ? "Показать состояние" : "Состояние на сегодняшний день" }}
        <span
          :class="{ 'arrow-down': isCollapsed, 'arrow-up': !isCollapsed }"
        ></span>
      </h3>
      <button @click="addItem" class="add-button">
        <img src="../assets/add-icon.svg" alt="Добавить" />
      </button>
    </div>
    <div v-if="!isCollapsed" class="status-list">
      <div v-for="item in items" :key="item.id" class="status-item">
        <button @click="toggleItemCollapse(item)" class="status-title">
          {{ item.title }}
          <span
            :class="{ arrowDown: item.isCollapsed, arrowUp: !item.isCollapsed }"
          ></span>
        </button>
        <div v-if="!item.isCollapsed" class="status-content">
          {{ item.content }}
        </div>
      </div>
    </div>
    <div v-if="showAddModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeAddModal">&times;</span>
          <div class="input-group">
             <label>Заголовок:</label>
             <input
                 type="text"
                 v-model="newItemTitle"
                 placeholder="Введите заголовок"
             />
          </div>
          <div class="input-group">
             <label>Содержание:</label>
              <textarea
                  v-model="newItemContent"
                  placeholder="Введите содержание"
              ></textarea>
          </div>

        <button @click="saveNewItem">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatusDisplay",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "14.01 Сделать КТ",
          content: "Нужно сделать КТ по плану лечения",
          isCollapsed: true,
        },
        {
          id: 2,
          title: "16.01 Терапевт",
          content: "Прием у терапевта согласно плану лечения",
          isCollapsed: true,
        },
        {
          id: 3,
          title: "Больно от сладкого справа внизу на коренном",
          content: "Описание симптомов",
          isCollapsed: false,
        },
      ],
      showAddModal: false,
      newItemTitle: "",
      newItemContent: "",
      nextItemId: 4,
      isCollapsed: false,
    };
  },
  methods: {
    toggleItemCollapse(item) {
      item.isCollapsed = !item.isCollapsed;
    },
    addItem() {
      this.showAddModal = true;
    },
    closeAddModal() {
      this.showAddModal = false;
      this.newItemTitle = "";
      this.newItemContent = "";
    },
    saveNewItem() {
      if (this.newItemTitle && this.newItemContent) {
        this.items.push({
          id: this.nextItemId++,
          title: this.newItemTitle,
          content: this.newItemContent,
          isCollapsed: true,
        });
        this.closeAddModal();
      }
    },
    toggleBlock() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
.status-display {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 20px;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.block-title {
  display: flex;
  align-items: center;
  font-size: 1.2em;
  font-weight: 500;
  cursor: pointer;
  color: #333;
  transition: color 0.2s ease;
  user-select: none;
  margin-bottom: 0;
  margin-right: 10px;
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
.status-list {
  overflow: hidden;
  transition: max-height 0.3s ease;
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
.status-item {
  margin-bottom: 10px;
}

.status-item:last-child {
  margin-bottom: 0;
}

.status-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  text-align: left;
  border: none;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  background: none;
}

.status-content {
  padding: 10px;
  border-bottom: 1px solid #f0f0f0;
}

.arrowDown {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
}

.arrowUp {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid black;
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
  z-index: 10;
}
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
.modal-content label {
  margin-bottom: 5px;
    font-weight: 500;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}
.modal-content .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

.modal-content input,
.modal-content textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1em;
  box-sizing: border-box;
  transition: border-color 0.2s ease;
}

    .modal-content input:focus,
    .modal-content textarea:focus {
        outline: none;
        border-color: #9B9CA7
    }
.modal-content textarea {
  min-height: 100px;
}
.modal-content button {
  padding: 12px 20px;
  background-color: #9B9CA7;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1em;
  transition: background-color 0.2s ease;
}
.modal-content button:hover {
  background-color: #8a8b96;
}

/* Styles for smaller screens */
@media (max-width: 480px) {
  .modal-content {
    padding: 15px;
    width: 95%;
    border-radius: 8px;
  }
  .close {
    top: 8px;
    right: 8px;
    font-size: 18px;
  }
  .modal-content input,
  .modal-content textarea {
    padding: 10px;
    margin-bottom: 10px;
    font-size: 0.95em;
  }
  .modal-content button {
    padding: 10px 18px;
    font-size: 0.95em;
  }
}
</style>