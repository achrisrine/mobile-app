<template>
  <div class="bottom-navigation">
    <button
      class="nav-button"
        :class="{active: $route.path === '/patient/dashboard'}"
      @click="$router.push('/patient/dashboard')"
    >
      <img src="../assets/list-icon.svg" alt="Список" />
    </button>
    <button
      class="nav-button"
      :class="{active: $route.path === '/patient/list'}"
      @click="$router.push('/patient/list')"
    >
      <img src="../assets/tooth-icon.svg" alt="Зубы" />
    </button>
    <button
      class="nav-button"
        :class="{active: $route.path === '/patient/settings'}"
      @click="$router.push('/patient/settings')"
    >
      <img src="../assets/settings-icon.svg" alt="Настройки" />
    </button>
  </div>
</template>

<script>
export default {
  name: "BottomNavigation",
};
</script>

<style scoped>
.bottom-navigation {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
  background-color: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  margin-top: auto;
}

.nav-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  transition: background-color 0.3s ease;
}

.nav-button img {
  width: 30px;
  height: 30px;
}
.nav-button:hover {
  background-color: #eee;
}

.nav-button.active {
  background-color: #e0e0e0;
}
</style>