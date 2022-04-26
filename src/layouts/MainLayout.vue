<template>
  <div class="main q-my-xl">
    <div class="layout">
      <div class="row q-col-gutter-xl">
        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 left___side">
          <q-list>
            <q-item-label header> Home </q-item-label>

            <EssentialLink
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
          </q-list>
        </div>
        <q-page-container>
          <div class="col-xs-2 col-sm-2 col-md-10 col-lg-10 col-xl-10">
            <router-view />
          </div>
        </q-page-container>
      </div>
    </div>
  </div>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Questions ",

    icon: "school",
  },
  {
    title: "Tags",
  },
  {
    title: "Users",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style scoped>
.layout {
  width: 70%;
  margin: 0 auto;
}
.left___side{
  border-right: 1px solid #ccc !important;
  height: 100vh;
}
</style>
