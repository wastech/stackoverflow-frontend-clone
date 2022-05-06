<template>
  <q-layout class="bg-grey-2">
    <nav-bar />
    <router-view :key="$route.path" />
  </q-layout>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    NavBar: defineAsyncComponent(() => import("components/NavBar.vue")),
  },
  name: "App",
};
</script>
