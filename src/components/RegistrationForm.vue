<template>
  <div class="registration-form">
    <h2>Регистрация</h2>
    <form @submit.prevent="submitForm">
      <div class="input-group">
        <input type="text" id="name" v-model="formData.name" placeholder="ФИО" required />
      </div>
      <div class="input-group">
        <input
          type="date"
          id="birthdate"
          v-model="formData.birthdate"
          placeholder="Дата рождения"
          required
        />
      </div>
      <div class="input-group">
        <select id="gender" v-model="formData.gender" required>
          <option value="" disabled selected>Пол</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
      </div>
      <div class="input-group">
        <input type="text" id="policy" v-model="formData.policy" placeholder="Полис" required />
      </div>
      <div class="input-group">
        <input type="tel" id="phone" v-model="formData.phone" placeholder="Номер телефона" required />
      </div>
      <div class="input-group">
        <input type="email" id="email" v-model="formData.email" placeholder="Почта" required />
      </div>
      <div class="checkbox-container">
        <input
          type="checkbox"
          id="representative"
          v-model="formData.isRepresentative"
        />
        <label for="representative" class="checkbox-label"
          >Я - законный представитель (родитель, опекун)</label
        >
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegistrationForm",
  data() {
    return {
      formData: {
        name: "",
        birthdate: "",
        gender: "",
        policy: "",
        phone: "",
        email: "",
        isRepresentative: false,
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Данные формы:", this.formData);
      this.$router.push("/patient/dashboard");
    },
  },
};
</script>

<style scoped>
.registration-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: "Arial", sans-serif;
    padding: 20px;
    background-color: #f9f9f9;
}

.registration-form h2 {
  margin-bottom: 25px;
  color: #333;
  font-size: 2em;
  font-weight: 600;
  text-align: center;
}

.registration-form form {
  display: flex;
  flex-direction: column;
    width: 100%;
    max-width: 360px;
    padding: 20px;
    border-radius: 15px;
    background-color: white;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #e0e0e0;
}

.input-group {
  margin-bottom: 15px;
  position: relative;
}

.registration-form input,
.registration-form select {
    width: 100%;
    padding: 14px;
    border: 2px solid #ddd;
    border-radius: 10px;
    background-color: #f9f9f9;
    font-size: 1em;
    color: #333;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.registration-form input::placeholder,
.registration-form select::placeholder {
  color: #aaa;
  font-weight: 400;
}

.registration-form input:focus,
.registration-form select:focus {
    outline: none;
    border-color: #9B9CA7;
    box-shadow: 0 0 6px rgba(155, 156, 167, 0.3);
}

/* Custom select arrow */
.registration-form select {
    cursor: pointer;
    padding-right: 35px;
}

.registration-form select::-ms-expand {
    display: none; /* Remove default IE arrow */
}

.registration-form select::after {
    content: "\25BC";
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none;
    color: #aaa;
    font-size: 0.9em;
}
.registration-form select option{
    color: #333;
}
.registration-form button {
    width: 100%;
    padding: 15px 20px;
    font-size: 1.1em;
    cursor: pointer;
    background-color: #9B9CA7;
    color: white;
    border: none;
    border-radius: 10px;
    margin-top: 25px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    font-weight: 500;
    box-shadow: 0 3px 5px rgba(155, 156, 167, 0.3);
}

.registration-form button:hover {
  background-color: #8a8b96;
     box-shadow: 0 5px 10px rgba(155, 156, 167, 0.4);
}

.checkbox-container {
    display: flex;
    align-items: center;
    margin-top: 20px;
    user-select: none;
}

.checkbox-label {
  margin-left: 10px;
  font-size: 0.95em;
  color: #666;
}

.checkbox-container input[type="checkbox"] {
  width: 18px;
  height: 18px;
  border: 2px solid #ddd;
  border-radius: 4px;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.checkbox-container input[type="checkbox"]:checked {
  background-color: #9B9CA7;
  border-color: #9B9CA7;
}

.checkbox-container input[type="checkbox"]:checked::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 5px;
    width: 5px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

/* Media query for smaller screens */
@media (max-width: 480px) {
    .registration-form h2 {
        font-size: 1.8em;
         margin-bottom: 20px;
    }

  .registration-form form {
    padding: 15px;
    border-radius: 12px;
  }

    .input-group {
        margin-bottom: 12px;
    }

  .registration-form input,
  .registration-form select {
        padding: 12px;
        font-size: 0.95em;
    }
    .registration-form select::after{
      right: 8px;
    }

  .registration-form button {
      padding: 13px 20px;
      font-size: 1em;
      margin-top: 20px;
    }

    .checkbox-container {
        margin-top: 18px;
    }

    .checkbox-label {
        font-size: 0.9em;
    }
}
</style>