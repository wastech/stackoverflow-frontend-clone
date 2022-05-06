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
        <form @submit.prevent="checkName">
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
        </form>
      </div>
      <q-space />
      <q-tabs v-if="!$store.state.token">
        <q-btn flat round dense icon="bluetooth" class="q-mr-sm" />
        <q-btn name="login " to="/login" label="login" />
        <q-btn name="register" to="/signup" label="register" />
      </q-tabs>
      <q-btn
        round
        :loading="loading"
        color="brown"
        @click="simulateProgress(4)"
        icon="far fa-user-circle"
      >
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
    </q-toolbar>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      keyword: "",
      sfClose: true,
      loading: false,
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn"]),
  },
  methods: {
    simulateProgress(number) {
      // we set loading state
      this[`loading`] = true;
      // simulate a delay
      setTimeout(() => {
        this.$router.push(`/profile`);
        // we're done, we reset loading state
        this[`loading`] = false;
      }, 1000);
    },
    checkName() {
      if (!this.keyword) {
        console.log("please enter your keyword");
      } else {
        this.$router.push(`/search/${this.keyword}`);
      }
    },
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
