<template>
  <div class="">
    <div class="title">
      <div class="text-h4 text-weight-medium">Users</div>
    </div>

    <div class="row justify-between q-my-lg">
      <div class="col-md-4">
        <div>
          <q-input
            outlined
            v-model="keyword"
            placeholder="Filter user"
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
      </div>
      <div class="col-md-4">
        <div class=" ">
          <q-btn outline color="grey-6" label="Popular" no-caps />
          <q-btn outline color="grey-6" label="Name" no-caps />
          <q-btn outline color="grey-6" label="New" no-caps />
          <br />
        </div>
      </div>
    </div>

    <div class="row q-col-gutter-sm">
      <div
        class="col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3"
        v-for="user in users"
        :key="user.id"
      >
        <q-item>
          <q-item-section top avatar>
            <q-avatar rounded size="70px">
              <img :src="user.image" :alt="user.username" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-primary text-weight-bold">{{
              user.username
            }}</q-item-label>
            <q-item-label caption>{{ user.address.address }}</q-item-label>
            <!-- <q-item-label caption class="text-weight-bold"
              >{{user.phone}}</q-item-label
            > -->
            <q-item-label caption class="text-primary text-weight-bold">
              {{ user.address.city }}</q-item-label
            >
          </q-item-section>
        </q-item>
      </div>
    </div>

    <div class="q-pa-lg flex flex-center q-mt-sm">
      <q-pagination
        v-model="pagination.page"
        :max="pagesNumber"
        size="md"
        :boundary-links="true"
        :to-fn="(page) => ({ query: { page: page } })"
      />
    </div>
  </div>
</template>
<script>
import { api } from "boot/axios";

export default {
  // name: 'ComponentName',
  data() {
    return {
      users: [],
      perPage: null,
      currentPage: null,
      total: null,
      page: null,
      pagination: {},
    };
  },
  created() {
    (this.pagination = {
      page: this.currentPage,
      perPage: this.limit,
    }),
      this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  computed: {
    pagesNumber() {
      return Math.ceil(this.total / this.perPage);
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.pagination.page = this.$route.query.page;
        await api
          .get(`users`, {
            params: {
              page: this.pagination.page,
            },
          })
          .then((response) => {
            this.users = response.data.data;
            this.current_page = response.data.current_page;
            this.perPage = response.data.limit;
            this.total = response.data.total;
       
          });
      } catch (err) {}
    },
    // viewPost(item_id) {
    //   this.$router.push({ name: "blog", params: { id: item_id } });
    // },
  },
};
// import AuthenticationService from "../services/AuthenticationService";
// export default {
//   data() {
//     return {
//       users: [],
//     };
//   },
//   methods: {
//     async queryindex() {
//       try {
//         await AuthenticationService.users().then((response) => {
//           this.users = response.data.data;
//           console.log("first", this.users);
//         });
//       } catch (err) {
//         console.log(err.response);
//       }
//     },
//     viewPost(item_id) {
//       this.$router.push({ name: "blog", params: { id: item_id } });
//     },
//   },
//   async mounted() {
//     this.queryindex();
//   },
// };
</script>
<style scoped>
.text-body1 {
  width: 70%;
}
</style>
