<template>
  <div class="login-page">
    <div class="text">
      Добро пожаловать в "Мои зубы"! Давай настроим ваше приложение:
    </div>
    <div class="button-container">
      <button class="role-button">Я - врач</button>
      <button class="role-button" @click="$router.push('/register')">Я - пациент</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "LoginPage",
};
</script>

<style>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 16px;
  background-color: #f5f5f5;
  text-align: center; /* Центрируем текст */
  font-family: "Montserrat Alternates", sans-serif;
}

.text {
  font-size: 20px;
}

.button-container {
  margin-top: 1em;
  display: flex;
  gap: 16px; /* Отступ между кнопками */
}

.role-button {
  padding: 12px;
  background-color: #9b9ca7; /* Цвет кнопок */
  color: black;
  border: none;
  border-radius: 8px; /* Округленные углы */
  cursor: pointer;
  width: 100%;
  max-width: 500px; /* Максимальная ширина кнопок */
  white-space: nowrap; /* Запрет на перенос текста */
  font-size: 20px;
}

.role-button:hover {
  background-color: #8a8c9a; /* Цвет кнопки при наведении */
}
</style>
