<template>
  <div class="main">
    <q-list class="rounded-borders">
      <q-item>
        <q-item-section avatar>
          <q-item-section top thumbnail class="q-ml-none">
            <img :src="item.image" />
          </q-item-section>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1" class="text-bold q-my-sm">{{
            item.username
          }}</q-item-label>

          <q-item-label caption>
            Member for {{ moment(item.createdAt).fromNow() }}
          </q-item-label>

          <q-item-label caption>
            {{item.university}}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
import moment from "moment";
import AuthenticationService from "../services/AuthenticationService";
export default {
  data() {
    return {
      item: {},
      name: "",
      body: "",

      id: this.$route.params.id,
    };
  },
  created: function () {
    this.moment = moment;
  },
  methods: {
    async getPost() {
      try {
        await AuthenticationService.user(this.id).then((response) => {
          this.item = response.data.data;
          console.log("first", this.item);
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  async mounted() {
    this.getPost();
  },
};
</script>
