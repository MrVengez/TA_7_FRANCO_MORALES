import { createWebHistory, createRouter } from "vue-router"; 
import CalculadoraNotas from "@/views/CalculadoraNotas.vue";
import ValidacionUsuario from "@/views/ValidacionUsuario.vue";

const routes = [

    {
    path: "/CalculadoraNotas",
    name: "CalculadoraNotas",
    component: CalculadoraNotas,
  },
    {
    path: "/ValidacionUsuario",
    name: "ValidacionUsuario",
    component: ValidacionUsuario,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;