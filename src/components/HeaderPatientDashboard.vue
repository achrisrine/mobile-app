<template>
  <div class="header-patient-dashboard">
    <div class="greeting">
      <h2 class="greeting-header">Добрый день</h2>
      <p class="user-name">Елена Иванова!</p>
    </div>
    <button class="settings-button">
      <img src="../assets/settings-icon.svg" alt="Настройки" />
    </button>
  </div>
</template>

<script>
export default {
  name: "HeaderPatientDashboard",
};
</script>

<style scoped>
.header-patient-dashboard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #f0f0f0;
}

.greeting {
  display: flex;
  flex-direction: column;
  align-items: center; /* Центрирование элементов внутри .greeting */
}

.greeting-header {
  margin-bottom: 0;
  color: #444;
    text-align: center; /* центрирование текста */
}
.user-name {
  margin-top: 0;
  color: #666;
    text-align: center; /* центрирование текста */
}

.settings-button {
  background: none;
  border: none;
  cursor: pointer;
}
.settings-button img {
  width: 25px;
  height: 25px;
}
</style>