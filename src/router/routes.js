const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue"),
      },
      {
        path: "grupos",
        component: () => import("pages/Grupos.vue"),
      },
      {
        path: "usuarios",
        component: () => import("pages/Usuarios.vue"),
      },
      {
        path: "cliente",
        component: () => import("pages/Cliente.vue"),
      },
      {
        path: "personal",
        component: () => import("pages/Personal.vue"),
      },
      {
        path: "productos",
        component: () => import("pages/Productos.vue"),
      },
      {
        path: "servicios",
        component: () => import("pages/Servicios.vue"),
      },
      {
        path: "facturas",
        component: () => import("pages/Facturas.vue"),
      },
      {
        path: "tokens",
        component: () => import("pages/Tokens.vue"),
      },
      {
        path: "ventas",
        component: () => import("pages/Ventas.vue"),
      },
    ],
  },
  {
    path: "/auth",
    component: () => import("pages/PageAuth.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
