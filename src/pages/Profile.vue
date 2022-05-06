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

          <q-item-label caption class="q-my-sm">
            Member for {{ moment(item.createdAt).fromNow() }}
          </q-item-label>

          <q-item-label caption class="q-my-sm">
            {{ item.university }}
          </q-item-label>
          <q-item-label caption v-if="item.address" class="q-my-lg">
            <q-icon
              name="fas fa-map-marker-alt"
              class="q-mr-md"
              size="md"
            ></q-icon>
            {{ item.address.address }}, {{ item.address.city }},
            {{ item.address.state }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <!-- new section -->
      <div class="row q-my-xl q-col-gutter-lg">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-6 col-xl-6 q-my-md">
          <div class="title">
            <div class="text-h6 q-my-md">Answers</div>
          </div>

          <q-list class="rounded-borders" bordered separator>
            <q-item>
              <q-item-section avatar>
                <q-item-label>
                  <q-btn outline color="grey" label="0" no-caps
                /></q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label lines="1" class="text-primary"
                  >Reputation is how the ommunity thanks community thanks
                  you</q-item-label
                >
              </q-item-section>

              <q-item-section side>
                <span>23, 4,2016</span>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-6 col-xl-6 q-my-md">
          <section class="">
            <div class="text-h6 q-my-md">Questions</div>

            <q-list class="rounded-borders" bordered separator>
              <q-item>
                <q-item-section avatar>
                  <q-item-label>
                    <q-btn outline color="grey" label="0" no-caps
                  /></q-item-label>
                </q-item-section>
                <q-item-section>
                  <q-item-label lines="1" class="text-primary"
                    >Reputation is how the ommunity thanks community thanks
                    you</q-item-label
                  >
                </q-item-section>

                <q-item-section side>
                  <span>23, 4,2016</span>
                </q-item-section>
              </q-item>
            </q-list>
          </section>
        </div>
      </div>
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
      // name: "",
      // body: "",

      id: this.$route.params.id,
    };
  },
  created: function () {
    this.moment = moment;
  },
  methods: {
    async getPost() {
      try {
        await AuthenticationService.profile(this.id).then((response) => {
          this.item = response.data.data;
          console.log("first", response.data);
        });
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  async mounted() {
    this.getPost();
  },
};
</script>
<style scoped>
img {
  width: 150px;
  height: 150px;
  object-fit: contain;
}
</style>
