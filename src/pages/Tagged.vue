<template>
  <div class="row">
    <div class="col-sm-12 col-xs-12 col-md-12 col-lg-9 col-xl-9">
      <q-list class="q-pa-md doc-container">
        <div class="row">
          <div class="col-md-4">
            <div class="title">
              <div class="text-h4 text-weight-medium">All Questions</div>
            </div>
          </div>
          <div class="col-md-4 offset-md-4">
            <q-btn color="primary" size="md" label="Ask Questions" no-caps />
          </div>
        </div>
      </q-list>

      <!-- user list -->
      <q-list v-for="question in questions" :key="question">
        <q-separator />
        <q-item class="q-my-md">
          <q-item-section thumbnail>
            <q-item-section>
              <q-item-label overline class="q-my-sm text-black text-overline">
                4 votes
              </q-item-label>
              <q-item-label class="q-my-sm text-overline text-mute">
                {{ question.answer_count }} answers
              </q-item-label>
              <q-item-label caption class="q-my-sm text-overline text-orange-8">
                {{ question.view_count }} views
              </q-item-label>
            </q-item-section>
          </q-item-section>

          <q-item-section>
            <router-link
              class="q-mx-sm text-caption"
              v-bind:to="{
                name: 'question',
                params: { id: question._id },
              }"
            >
              <q-item-label
                class="q- my-sm text-blue-4 text-primary text-capitalize text-weight-bold"
              >
                <div class="text-body2" v-html="question.title"></div>
              </q-item-label>
            </router-link>
            <q-item-label caption lines="3" class="q-my-sm">
              <div class="text-body1" v-html="question.body"></div>
            </q-item-label>

            <div class="row q-col-gutter-sm">
              <div class="col-md-8 self-start">
                <div class="q-gutter-sm">
                  <q-item-label caption>
                    <q-chip
                      class="glossy bg-blue-2"
                      v-for="(tag, index) in question.tags"
                      :key="index"
                      ><router-link
                        class="q-mx-sm text-caption"
                        v-bind:to="{
                          name: 'tagged',
                          params: { tag: tag },
                        }"
                        v-html="tag"
                      >
                      </router-link
                    ></q-chip>
                  </q-item-label>
                </div>
              </div>
              <div class="col-md-4 self-end" v-if="question.owner">
                <q-item v-ripple>
                  <q-item-section avatar>
                    <q-avatar square>
                      <img
                        :src="question.owner.profile_image"
                        :alt="question.owner.display_name"
                      />
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>{{
                    question.owner.display_name
                  }}</q-item-section>
                </q-item>
              </div>
              <div class="col-md-4 self-end" v-else>
                <q-item v-ripple>
                  <q-item-section avatar>
                    <q-avatar square>
                      <img
                        :src="question.user.image"
                        :alt="question.user.username"
                      />
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>{{ question.user.username }}</q-item-section>
                </q-item>
              </div>
            </div>
          </q-item-section>

          <!-- <q-item-section side top>
        <q-item-label caption>meta</q-item-label>
      </q-item-section> -->
        </q-item>
        <q-separator />
      </q-list>
    </div>
  </div>
</template>
<script>
import questionService from "../services/questionService";

export default {
  // name: 'ComponentName',
  data() {
    return {
      questions: [],
      id: this.$route.params.tag,
    };
  },

  methods: {
    async getPosts() {
      try {
        await questionService.getTagged(this.id).then((response) => {
          this.questions = response.data.data;
          console.log("first", response.data.data);
        });
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  async mounted() {
    this.getPosts();
  },
};
</script>
<style scoped>
a {
  background-color: transparent;
  text-decoration: none;
  color: #000;
}
a:hover {
  color: #f53f7b;
}
a:focus {
  color: #f53f7b;
}
</style>
