<template>
 <div class="image-container">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="imageSrc"
      :style="getPosition(index)"
      class="fixed-image"
    />
     <img
      src="../assets/logo.png" 
      class="logo"
      alt="Логотип"
    />
  </div>
</template>

<script>
import toothImage from '../assets/tooth.svg';
export default {
  name: "SplashScreen",
  mounted() {
    setTimeout(() => {
      this.$router.push("/login");
    }, 3000); // Переход на страницу логина через 3 секунды
  },
  data() {
    return {
      imageSrc: toothImage, // Укажите путь к вашему изображению
      images: Array(17).fill(null),// Создаем массив из 10 элементов
    };
  },
   methods: {
    getPosition(index) {
      const positions = [
        { top: '5%', left: '10%' }, // 1 картинка
        { top: '3%', left: '60%' }, // 2 картинка
        { top: '15%', left: '30%' }, // 3 картинка
        { top: '15%', left: '75%' }, // 4 картинка
        { top: '25%', left: '10%' }, // 5 картинка
        { top: '25%', left: '55%' }, // 6 картинка
        { top: '35%', left: '5%' }, // 7 картинка
        { top: '37%', left: '40%' }, // 8 картинка
        { top: '35%', left: '75%' }, // 9 картинка
        { top: '50%', left: '10%' }, // 10 картинка
        { top: '50%', left: '60%' }, // 11 картинка
        { top: '65%', left: '40%' }, // 12 картинка
        { top: '65%', left: '75%' }, // 13
        { top: '75%', left: '10%' }, // 14 картинка
        { top: '77%', left: '60%' }, // 15 картинка
        { top: '85%', left: '30%' }, // 16 картинка
        { top: '90%', left: '70%' }, // 17 картинка
      ];
      return {
        position: 'absolute',
        ...positions[index],
        width: '70px', // Укажите желаемую ширину изображения
        height: '70px', // Укажите желаемую высоту изображения
      };
    }
  },
};
</script>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
  height: 100vh; /* Высота контейнера */
  overflow: hidden; /* Скрываем изображения, выходящие за пределы контейнера */
}

.logo {
  position: absolute;
  top: 50%; /* Центрируем по вертикали */
  left: 50%; /* Центрируем по горизонтали */
  transform: translate(-50%, -50%); /* Сдвигаем на половину ширины и высоты для центрирования */
  width: 151px;
  height: 210px;
  height: auto; /* Автоматическая высота для сохранения пропорций */
}


.fixed-image {
  pointer-events: none; /* Отключаем взаимодействие с изображениями */
}

.random-image {
  pointer-events: none; /* Отключаем взаимодействие с изображениями */
}
</style>
