<template>
  <div class="row">
    <div class="col-sm-12 col-xs-12 col-md-12 col-lg-9 col-xl-9">
      <q-list class="q-pa-md doc-container">
        <div class="row justify-between q-col-gutter-sm">
          <div class="col-md-8">
            <div class="title">
              <div class="text-h6 text-weight-medium">
                How to merge lists of objects, based on time key
              </div>
              <div class="q-gutter-lg row">
                <div class="text-caption">Asked today</div>
                <div class="text-caption">Modified today</div>
                <div class="text-caption">Viewed 3 times</div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <q-btn color="primary" size="md" to="/question/ask" label="Ask Questions" no-caps />
          </div>
        </div>
      </q-list>

      <q-separator />
      <div class="row q-col-gutter-sm q-my-md">
        <div class="col-sm-2 col-xs-2 col-md-2 col-lg-1 col-xl-1">
          <div class="q-mt-md">
            <q-icon name="fas fa-chevron-up" size="md" />
          </div>
          <div class="q-my-sm text-h5 q-pa-sm">0</div>

          <div class="">
            <q-icon name="fas fa-chevron-down" size="md" />
          </div>
        </div>

        <div class="col-sm-10 col-xs-10 col-md-10 col-lg-11 col-xl-11">
          <div class="q-my-sm text-body1">
            Recently I used dot Trace profiler to find the bottlenecks in my
            application. Suddenly, I have seen that in most of the places which
            are taking more time and more cpu usage to is ...Recently I used dot
            Trace profiler to find the bottlenecks in my application. Suddenly,
            I have seen that in most of the places which are taking more time
            and more cpu usage to is Recently I used dot Trace profiler to find
            the bottlenecks in my application. Suddenly, I have seen that in
            most of the places which are taking more time and more cpu usage to
            is Recently I used dot Trace profiler to find the bottlenecks in my
            application. Suddenly, I have seen that in most of the places which
            are taking more time and more cpu usage to is Recently I used dot
            Trace profiler to find the bottlenecks in my application. Suddenly,
            I have seen that in most of the places which are taking more time
            and more cpu usage to is Recently I used dot Trace profiler to find
            the bottlenecks in my application. Suddenly, I have seen that in
            most of the places which are taking more time and more cpu usage to
            is Recently I used dot Trace profiler to find the bottlenecks in my
            application. Suddenly, I have seen that in most of the places which
            are taking more time and more cpu usage to is
          </div>

          <div class="text-subtitle2 q-gutter-md q-my-lg q-mb-xs">
            <span class="bg-teal-1 q-pa-sm">javascript</span>
          </div>
        </div>
      </div>

      <!-- comments box -->
      <div class="" style="max-width: 100%">
        <q-input
          v-model="text"
          filled
          :input-style="{ resize: 'none', height: '100%' }"
          class="“full-height”"
          type="textarea"
          rows="1"
          aria-placeholder="comments"
        />
      </div>
      <div class="text-caption text-grey">Add a Comment</div>
      <!-- answer question fform -->

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

          <div class="q-my-md">
            <q-btn color="primary" size="md" label="Post Your Answer" no-caps />
          </div>
        </q-card-section>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: "",
      qeditor:
        "<pre>Check out the two different types of dropdowns" +
        ' in each of the "Align" buttons.</pre> ',
    };
  },
};
</script>
