<template>
  <div class="main">
    <div class="text-h6" v-if="showLoading"></div>

    <div class="row" v-else>
      <div class="col-sm-12 col-xs-12 col-md-12 col-lg-9 col-xl-9">
        <q-list class="q-pa-md doc-container">
          <div class="row justify-between q-col-gutter-sm">
            <div class="col-md-8">
              <div class="title">
                <div
                  class="text-h6 text-weight-medium"
                  v-html="question.title"
                ></div>
                <div class="q-gutter-lg row">
                  <div class="text-caption">
                    Asked {{ moment(question.createdAt).fromNow() }}
                  </div>
                  <div class="text-caption">
                    Modified {{ moment(question.updatedAt).fromNow() }}
                  </div>
                  <div class="text-caption">
                    Viewed {{ question.view_count }} times
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <q-btn
                color="primary"
                size="md"
                to="/question/ask"
                label="Ask Questions"
                no-caps
              />
            </div>
          </div>
        </q-list>

        <q-separator />
        <div class="row q-col-gutter-sm q-my-md">
          <div class="col-sm-2 col-xs-2 col-md-2 col-lg-1 col-xl-1">
            <div class="q-mt-md">
              <q-icon name="fas fa-chevron-up" size="md" />
            </div>
            <div class="q-my-sm text-h5 q-pa-sm" v-if="question.upvotes">
              {{ question.upvotes.length }}
            </div>

            <div class="">
              <q-icon name="fas fa-chevron-down" size="md" />
            </div>
          </div>

          <div class="col-sm-10 col-xs-10 col-md-10 col-lg-11 col-xl-11">
            <div class="q-my-sm text-body1" v-html="question.body"></div>

            <div class="text-subtitle2 q-gutter-md q-my-lg q-mb-xs">
              <span
                class="bg-teal-1 q-pa-sm"
                v-for="(tag, index) in question.tags"
                :key="index"
              >
                <router-link
                  class="q-mx-sm text-caption"
                  v-bind:to="{
                    name: 'tagged',
                    params: { tag: tag },
                  }"
                  v-html="tag"
                >
                </router-link
              ></span>
            </div>
          </div>
        </div>
        <q-separator></q-separator>

        <!-- comments box -->
        <div class="" style="max-width: 100%">
          <form action="" @submit.prevent="onSubmit">
            <q-input
              v-model="body"
              filled
              class="“full-height”"
              type="text"
              aria-placeholder="comments"
            />
          </form>
        </div>
        <div class="text-caption text-grey" type>Add a Comment</div>

        <q-separator></q-separator>
        <!-- comments -->
        <q-list>
          <q-item v-for="(comment, index) in comments" :key="index">
            <q-item-section>
              <div>
                <span class="q-mr-sm"> {{ index }}</span> {{ comment.body }} -
                <span class="text-primary q-mx-sm" v-if="comment.user">{{
                  comment.user.username
                }}</span>

                <span class="text-grey">{{
                  moment(comment.created).fromNow()
                }}</span>
              </div>
              <q-separator></q-separator
            ></q-item-section>
          </q-item>
        </q-list>

        <!-- Answers -->
        <div
          class="row q-col-gutter-sm q-my-md"
          v-for="answer in answers"
          :key="answer"
        >
          <div class="col-sm-2 col-xs-2 col-md-2 col-lg-1 col-xl-1">
            <div class="q-mt-xs">
              <q-icon name="fas fa-chevron-up" size="sm" />
            </div>
            <div class="q-my-sm text-h5 q-pa-sm">0</div>

            <div class="">
              <q-icon name="fas fa-chevron-down" size="sm" />
            </div>
          </div>

          <div class="col-sm-10 col-xs-10 col-md-10 col-lg-11 col-xl-11">
            <div class="q-my-sm text-body1" v-html="answer.answer"></div>
          </div>
          <q-separator></q-separator>
        </div>
        <!-- Answers -->

        <section>
          <q-card-section>
            <div class="text-subtitle1 q-my-lg">
              Know someone who can answer? Share a link to this
              <span class="text-primary">question</span> via
              <span class="text-primary">email</span> ,
              <span class="text-primary">Twitter</span> , or
              <span class="text-primary">Facebook</span>. Your Answer
            </div>

            <div class="" style="max-width: 100%">
              <q-editor
                v-model="answer"
                :dense="$q.screen.lt.md"
                :toolbar="toolbar"
                :fonts="{
                  arial: 'Arial',
                  arial_black: 'Arial Black',
                  comic_sans: 'Comic Sans MS',
                  courier_new: 'Courier New',
                  impact: 'Impact',
                  lucida_grande: 'Lucida Grande',
                  times_new_roman: 'Times New Roman',
                  verdana: 'Verdana',
                }"
              >
              </q-editor>
            </div>

            <div class="q-my-md">
              <q-btn
                color="primary"
                size="md"
                type="submit"
                @click.prevent="Submit"
                label="Post Your Answer"
                no-caps
              />
            </div>
          </q-card-section>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import questionService from "../services/questionService";
import commentService from "../services/commentService";
import answerService from "../services/answerService";
export default {
  data() {
    return {
      current: "",
      toolbar: [
        [
          {
            label: this.$q.lang.editor.align,
            icon: this.$q.iconSet.editor.align,
            fixedLabel: true,
            list: "only-icons",
            options: ["left", "center", "right", "justify"],
          },
          {
            label: this.$q.lang.editor.align,
            icon: this.$q.iconSet.editor.align,
            fixedLabel: true,
            options: ["left", "center", "right", "justify"],
          },
        ],
        ["bold", "italic", "strike", "underline", "subscript", "superscript"],
        ["token", "hr", "link", "custom_btn"],
        ["print", "fullscreen"],
        [
          {
            label: this.$q.lang.editor.formatting,
            icon: this.$q.iconSet.editor.formatting,
            list: "no-icons",
            options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "code"],
          },
          {
            label: this.$q.lang.editor.fontSize,
            icon: this.$q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: "no-icons",
            options: [
              "size-1",
              "size-2",
              "size-3",
              "size-4",
              "size-5",
              "size-6",
              "size-7",
            ],
          },
          {
            label: this.$q.lang.editor.defaultFont,
            icon: this.$q.iconSet.editor.font,
            fixedIcon: true,
            list: "no-icons",
            options: [
              "default_font",
              "arial",
              "arial_black",
              "comic_sans",
              "courier_new",
              "impact",
              "lucida_grande",
              "times_new_roman",
              "verdana",
            ],
          },
          "removeFormat",
        ],
        ["quote", "unordered", "ordered", "outdent", "indent"],

        ["undo", "redo"],
        ["viewsource"],
      ],
      comments: [],
      showLoading: true,
      answers: [],
      answer: "",
      question: {},
      body: "",
      id: this.$route.params.id,
    };
  },
  methods: {
    async onSubmit() {
      const comment = {
        question: this.id,
        body: this.body,
      };
      try {
        await commentService.addcomment(comment).then((response) => {
          this.$q.notify({
            type: "positive",
            timeout: 1000,
            position: "center",
            message: "Comment sent",
          });
          this.getComments();
        });
      } catch (error) {
        this.$q.notify({
          type: "negative",
          timeout: 1000,
          position: "center",
          message: error.response.data.error,
        });
      }
      this.body = "";
    },
    async Submit() {
      const answerData = {
        question: this.id,
        answer: this.answer,
      };

      try {
        await answerService.addAnswer(answerData).then((response) => {
          this.$q.notify({
            type: "positive",
            timeout: 1000,
            position: "center",
            message: "Comment sent",
          });
          this.getAnswers();
        });
      } catch (error) {
        console.log("first", error);
        this.$q.notify({
          type: "negative",
          timeout: 500,
          position: "center",
          message: error,
        });
      }
      this.answer = "";
    },
    async getSinglePost() {
      this.$q.loading.show();
      this.showLoading = true;
      try {
        await questionService.showQuestion(this.id).then((response) => {
          this.question = response.data.data;
        });
      } catch (err) {
        console.log(err);
      } finally {
        this.$q.loading.hide();
      }
    },
    async getComments() {
      try {
        await commentService.getComments(this.id).then((response) => {
          this.comments = response.data.data;
        });
      } catch (err) {
        console.log(err);
      } finally {
        this.$q.loading.hide();
        this.showLoading = false;
      }
    },
    async getAnswers() {
      try {
        await answerService.getAnswers(this.id).then((response) => {
          this.answers = response.data.data;
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  created: function () {
    this.moment = moment;
  },
  mounted() {
    this.getSinglePost();
    this.getComments();
    this.getAnswers();
  },
};
</script>
<style scoped>
.text-body1 {
  text-overflow: inherit;
  text-overflow: initial;
  text-overflow: revert;
  text-overflow: revert-layer;
  text-overflow: unset;
}
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
