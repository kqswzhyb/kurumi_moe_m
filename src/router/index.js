const routes = [
  {
    path: "/",
    redirect: "/top16"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/top8",
    name: "top8",
    component: () => import("@/views/Top8.vue")
  },
  {
    path: "/top16",
    name: "top16",
    component: () => import("@/views/Top16.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
