<template>
  <q-layout>
    <nav-bar />
    <router-view :key="$route.path" />
  </q-layout>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { NavBar },
  name: "App",
});
</script>
