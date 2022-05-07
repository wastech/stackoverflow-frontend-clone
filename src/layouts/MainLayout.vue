<template>
  <div class="main q-my-xl">
    <div class="layout">
      <div class="row q-col-gutter-xl">
        <div class="col-xs-2 col-sm-2 col-md-3 col-lg-2 col-xl-2 left___side">
          <q-list>
            <q-item-label exact header><a href="/">Home</a> </q-item-label>

            <EssentialLink
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
          </q-list>
        </div>
        <div class="col-xs-10 col-sm-10 col-md-9 col-lg-10 col-xl-10">
          <q-page-container >
            <router-view />
          </q-page-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


const linksList = [
  {
    title: "Questions ",
    link: "/questions",

    icon: "school",
  },
  {
    title: "Tags",
    link: "/tags",
  },
  {
    title: "Users",
    link: "/users",
  },
];

import { defineComponent, defineAsyncComponent,ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink: defineAsyncComponent(() =>
      import("components/EssentialLink")
    ),
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
.left___side {
  border-right: 1px solid #ccc !important;
  height: 100vh;
}
a {
  text-decoration: none;
  color: #000;
}
</style>
