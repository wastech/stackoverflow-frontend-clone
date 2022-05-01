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
            {{ item.university }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <div class="row q-my-xl q-col-gutter-md">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <div class="title">
            <div class="text-h6">Stats</div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
          <div class="text-h6">About</div>
          <div class="text-body2">
            {{ item.username }} ,{{ item.university }}
          </div>

          <section class="q-my-xl">
            <div class="text-h6 q-my-md">Top tags</div>

            <q-list class="rounded-borders" bordered separator>
              <q-item>
                <q-item-section>
                  <q-item-label lines="1">aremu</q-item-label>
                </q-item-section>

                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      size="md"
                      flat
                      dense
                      round
                      color="green"
                      icon="phone"
                    />
                  </div>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label lines="1">aremu</q-item-label>
                </q-item-section>

                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      size="md"
                      flat
                      dense
                      round
                      color="green"
                      icon="phone"
                    />
                  </div>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label lines="1">aremu</q-item-label>
                </q-item-section>

                <q-item-section side>
                  <div class="text-grey-8 q-gutter-xs">
                    <q-btn
                      size="md"
                      flat
                      dense
                      round
                      color="green"
                      icon="phone"
                    />
                  </div>
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
