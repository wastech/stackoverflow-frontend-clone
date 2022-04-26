<template>
  <div class="bg-brown-1 shadow-2 rounded-borders">
    <q-toolbar class="main">
      <div class="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png"
          alt=""
        />
      </div>
      <q-space />
      <div style="max-width: 100%">
        <q-input
          outlined
          v-model="keyword"
          placeholder="Search"
          dense
          hide-bottom-space
          class="search-field"
          :class="{ 'sb-closed': sfClose }"
          @blur="
            sfClose = true;
            keyword = '';
          "
          @focus="sfClose = false"
          clearable
          clear-icon="close"
        >
          <template v-slot:prepend>
            <q-icon name="search" class="cursor-pointer" />
          </template>
        </q-input>
      </div>
      <q-space />
      <q-tabs>
        <q-btn flat round dense icon="bluetooth" class="q-mr-sm" />
        <q-tab name="login " label="login" />
        <q-tab name="register" label="register" />
      </q-tabs>
    </q-toolbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: "",
      sfClose: true,
    };
  },
};
</script>

<style scoped>
.q-toolbar {
  width: 70%;
  margin: 0 auto;
}
.logo {
  width: 15%;
}
.logo > img {
  object-fit: contain;
  width: 100%;
}
.search-field {
  transition: width 0.36s;
  width: 600px;
}
</style>
