import store from "../store";
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/tags", component: () => import("pages/Tags.vue") },

      { path: "/users", component: () => import("pages/Users.vue") },
      {
        path: "/search/:keyword",
        name: "search",
        component: () => import("pages/searchPage.vue"),
      },
      {
        path: "/questions/:id",
        name: "question",
        component: () => import("pages/QuestionPage.vue"),
      },
      {
        path: "/user/:id",
        name: "user",
        component: () => import("pages/User.vue"),
      },
      {
        path: "/questions/tagged/:tag",
        name: "tagged",
        component: () => import("pages/Tagged.vue"),
      },
    ],
  },

  {
    path: "/login",
    name: "login",
    component: () => import("pages/Login.vue"),
    beforeEnter(to, from, next) {
      // check status, if logged in can't go to login page
      if (!store.state.isUserLoggedIn) {
        next();
      } else {
        next({
          name: "dashboard",
        });
      }
    },
  },
  {
    path: "/signup",
    component: () => import("pages/Signup.vue"),
    beforeEnter(to, from, next) {
      // check status, if logged in can't go to login page
      if (!store.state.isUserLoggedIn) {
        next();
      } else {
        next({
          name: "login",
        });
      }
    },
  },
  {
    path: "/question/ask",
    component: () => import("pages/AskQuestion.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
