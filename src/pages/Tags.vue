<template>
  <div class="">
    <div class="title">
      <div class="text-h4 text-weight-medium">Tags</div>
    </div>
    <div class="text-body1 q-my-md">
      A tag is a keyword or label that categorizes your question with other,
      similar questions. Using the right tags makes it easier for others to find
      and answer your question.
    </div>
    <div class="row justify-between q-my-lg">
      <div class="col-md-4">
        <div>
          <q-input
            outlined
            v-model="keyword"
            placeholder="Filter by Tag Name"
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
        class="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-3"
        v-for="(Tag, index) in Tags"
        :key="index"
      >
        <q-card class="my-card" flat bordered>
          <q-card-section>
            <div class="text-subtitle2 q-mt-sm q-mb-xs">
              <span class="bg-teal-1 q-pa-sm text-primary">
                <router-link
                  class="q-mx-sm text-caption"
                  v-bind:to="{
                    name: 'tagged',
                    params: { tag: Tag._id },
                  }"
                  v-html="Tag._id"
                >
                </router-link>
              </span>
            </div>
            <div class="text-caption q-my-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <q-list>
              <q-item>
                <q-item-section thumbnail class="q-mr-xl">
                  <div class="">
                    <q-item-label caption> </q-item-label>
                    <q-item-label caption>Questions</q-item-label>
                  </div>
                </q-item-section>

                <q-item-section side top>
                  <q-item-label caption lines="2">
                    1124 asked today, 6837 this week
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import questionService from "../services/questionService";
export default {
  data() {
    return {
      Tags: [],
      keyword: "",
      sfClose: true,
    };
  },
  methods: {
    async queryindex() {
      try {
        await questionService.getTags().then((response) => {
          this.Tags = response.data.data;
          console.log("first", response.data.data);
        });
      } catch (err) {
        console.log(err.response);
      }
    },
    viewPost(item_id) {
      this.$router.push({ name: "blog", params: { id: item_id } });
    },
  },
  async mounted() {
    this.queryindex();
  },
};
</script>
<style scoped>
.text-body1 {
  width: 70%;
}
a {

  text-decoration: none;

}
a:hover {
  color: #f53f7b;
}
a:focus {
  color: #f53f7b;
}
</style>
