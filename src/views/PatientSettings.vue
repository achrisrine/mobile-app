<template>
  <div class="patient-dashboard">
    <h2>Настройки</h2>
    <BottomNavigation />
  </div>
</template>

<script>
import BottomNavigation from "../components/BottomNavigation.vue";
import HeaderPatientDashboard from "../components/HeaderPatientDashboard.vue";

export default {
  name: "PatientSettings",
  components: {
    BottomNavigation,
        HeaderPatientDashboard
  },
};
</script>

<style scoped>
.patient-dashboard {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: sans-serif;
  /*  Crucially, remove the height calculation */
  /* height: calc(100vh - 60px); */
}

.bottom-navigation {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  /* Add height */
  height: 60px; /* Or your actual height */
}
</style>