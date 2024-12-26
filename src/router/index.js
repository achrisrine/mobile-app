import { createRouter, createWebHistory } from "vue-router";
import SplashScreen from "../components/SplashScreen.vue";
import LoginPage from "../components/LoginPage.vue";
import RegistrationForm from '../components/RegistrationForm.vue'
import PatientDashboard from '../views/PatientDashboard.vue'
import PatientList from '../views/PatientList.vue'
import PatientSettings from '../views/PatientSettings.vue'

const routes = [
  { path: "/", component: SplashScreen },
  { path: "/login", component: LoginPage },
  {path: "/register", component: RegistrationForm},
  {path: '/patient/dashboard', component: PatientDashboard},
{
    path: '/patient/list',
    name: 'PatientList',
    component: PatientList
},
{
    path: '/patient/settings',
    name: 'PatientSettings',
    component: PatientSettings
}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
