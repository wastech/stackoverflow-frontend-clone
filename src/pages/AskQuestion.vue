<template>
  <div class="main">
    <div class="title q-my-xl">
      <div class="text-h4 text-weight-small">Ask a public question</div>
    </div>
    <!-- form card -->
    <q-card class="my-card q-pa-sm">
      <q-card-section>
        <div class="text-h6">Title</div>
        <div class="text-caption">
          Be specific and imagine you’re asking a question to another person
        </div>
        <div class="q-my-sm" style="max-width: 100%">
          <q-input
            outlined
            v-model="text"
            placeholder="e.g. Is there an R function for finding the index of an element in a vector"
          />
        </div>
      </q-card-section>

      <q-card-section>
        <div class="text-h6">Body</div>
        <div class="text-caption q-my-sm">
          Include all the information someone would need to answer your question
        </div>
        <div class="" style="max-width: 100%">
          <q-editor
            v-model="qeditor"
            :dense="$q.screen.lt.md"
            :toolbar="[
              [
                {
                  label: $q.lang.editor.align,
                  icon: $q.iconSet.editor.align,
                  fixedLabel: true,
                  list: 'only-icons',
                  options: ['left', 'center', 'right', 'justify'],
                },
                {
                  label: $q.lang.editor.align,
                  icon: $q.iconSet.editor.align,
                  fixedLabel: true,
                  options: ['left', 'center', 'right', 'justify'],
                },
              ],
              [
                'bold',
                'italic',
                'strike',
                'underline',
                'subscript',
                'superscript',
              ],
              ['token', 'hr', 'link', 'custom_btn'],
              ['print', 'fullscreen'],
              [
                {
                  label: $q.lang.editor.formatting,
                  icon: $q.iconSet.editor.formatting,
                  list: 'no-icons',
                  options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
                },
                {
                  label: $q.lang.editor.fontSize,
                  icon: $q.iconSet.editor.fontSize,
                  fixedLabel: true,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'size-1',
                    'size-2',
                    'size-3',
                    'size-4',
                    'size-5',
                    'size-6',
                    'size-7',
                  ],
                },
                {
                  label: $q.lang.editor.defaultFont,
                  icon: $q.iconSet.editor.font,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'default_font',
                    'arial',
                    'arial_black',
                    'comic_sans',
                    'courier_new',
                    'impact',
                    'lucida_grande',
                    'times_new_roman',
                    'verdana',
                  ],
                },
                'removeFormat',
              ],
              ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

              ['undo', 'redo'],
              ['viewsource'],
            ]"
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
      </q-card-section>

      <q-card-section>
        <div class="text-h6">Tags</div>
        <div class="text-caption">
          Add up to 5 tags to describe what your question is about
        </div>
        <div class="q-my-sm" style="max-width: 100%">
          <q-input
            outlined
            v-model="text"
            placeholder="e.g.(Javascript, css, html"
          />
        </div>
      </q-card-section>
    </q-card>

    <div class="button q-my-md">
      <q-btn color="primary" label="Submit Your Question" no-caps />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      qeditor: ref(
        "<pre>Check out the two different types of dropdowns" +
          ' in each of the "Align" buttons.</pre> '
      ),
    };
  },
};
</script>
<style>
.main {
  width: 75%;
  margin: 0 auto;
}
</style>
