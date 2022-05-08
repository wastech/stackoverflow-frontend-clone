<template>
  <q-layout class="bg-grey-2">
    <div class="mobile">
      <div class="text-center" v-if="$q.screen.lt.sm">
        <q-banner inline-actions class="text-white bg-red text-capitalize">
          This Website can only display on destop
        </q-banner>
      </div>
    
    </div>
      <div v-if="$q.screen.gt.sm">
        <nav-bar />
        <router-view :key="$route.path" />
      </div>
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
