import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "@/stores/Store";

import HomeView from "@/views/HomeView.vue";
import Login from "@/views/LoginView.vue";
import Callback from "@/views/authCallback.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Search from "@/views/getSearch.vue";
import Album from "@/views/getAlbum.vue";
import Artist from "@/views/getArtist.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/callback",
      name: "callback",
      component: Callback,
    },
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/search",
          name: "search",
          component: Search,
        },
        {
          path: "/album/:id",
          name: "album",
          component: Album,
        },
        {
          path: "/artist/:id",
          name: "artist",
          component: Artist,
        },
      ],
    },
  ],
  scrollBehavior(to, from) {
    const store = useStore();
    store.setPage(to.fullPath);
    store.setPageName(to.name);
    store.setPreviousPage(from.fullPath);
    return { top: 0 };
  },
});

export default router;
