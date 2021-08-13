import Auth from "../views/auth/Auth";
import Panel from "../views/app/Panel";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Panel",
    component: Panel,
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
    meta: { layout: "auth-layout" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
