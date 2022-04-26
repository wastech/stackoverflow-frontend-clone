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
      <q-list>
        <q-separator />
        <q-item class="q-my-md">
          <q-item-section thumbnail>
            <q-item-section>
              <q-item-label overline class="q-my-sm text-black text-overline">
                194 votes
              </q-item-label>
              <q-item-label class="q-my-sm text-overline text-mute">
                0 answers
              </q-item-label>
              <q-item-label caption class="q-my-sm text-overline text-orange-8">
                9k views
              </q-item-label>
            </q-item-section>
          </q-item-section>

          <q-item-section>
            <q-item-label
              class="q-my-sm text-blue-4 text-primary text-weight-bold"
              >SNIReadSyncOverAsync Performance issue</q-item-label
            >
            <q-item-label caption lines="2" class="q-my-sm"
              >Recently I used dot Trace profiler to find the bottlenecks in my
              application. Suddenly, I have seen that in most of the places
              which are taking more time and more cpu usage to is ...
            </q-item-label>

            <div class="row q-col-gutter-sm">
              <div class="col-md-8 self-start">
                <div class="q-gutter-sm">
                  <q-item-label caption>
                    <q-chip class="glossy bg-blue-2">Add</q-chip>
                    <q-chip class="glossy bg-blue-2">Bookmark</q-chip>
                    <q-chip class="glossy bg-blue-2">Add</q-chip>
                    <q-chip class="glossy bg-blue-2">Bookmark</q-chip>

                    <q-chip class="glossy bg-blue-2">Get directions</q-chip>
                  </q-item-label>
                </div>
              </div>
              <div class="col-md-4 self-end">
                <q-item v-ripple>
                  <q-item-section avatar>
                    <q-avatar
                      color="teal"
                      text-color="white"
                      icon="bluetooth"
                    />
                  </q-item-section>

                  <q-item-section
                    >Avatar-type Avatar-type Avatar-type icon</q-item-section
                  >
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

      <q-list>
        <q-separator />
        <q-item class="q-my-md">
          <q-item-section thumbnail>
            <q-item-section>
              <q-item-label overline class="q-my-sm text-black text-overline">
                194 votes
              </q-item-label>
              <q-item-label class="q-my-sm text-overline text-mute">
                0 answers
              </q-item-label>
              <q-item-label caption class="q-my-sm text-overline text-orange">
                9k views
              </q-item-label>
            </q-item-section>
          </q-item-section>

          <q-item-section>
            <q-item-label
              class="q-my-sm text-blue-4 text-primary text-weight-bold"
              >SNIReadSyncOverAsync Performance issue</q-item-label
            >
            <q-item-label caption lines="2" class="q-my-sm"
              >Recently I used dot Trace profiler to find the bottlenecks in my
              application. Suddenly, I have seen that in most of the places
              which are taking more time and more cpu usage to is ...
            </q-item-label>

            <div class="row q-col-gutter-sm">
              <div class="col-md-8 self-start">
                <div class="q-gutter-sm">
                  <q-item-label caption>
                    <q-chip class="glossy bg-blue-2">Add</q-chip>
                    <q-chip class="glossy bg-blue-2">Bookmark</q-chip>
                    <q-chip class="glossy bg-blue-2">Add</q-chip>
                    <q-chip class="glossy bg-blue-2">Bookmark</q-chip>

                    <q-chip class="glossy bg-blue-2">Get directions</q-chip>
                  </q-item-label>
                </div>
              </div>
              <div class="col-md-4 self-end">
                <q-item v-ripple>
                  <q-item-section avatar>
                    <q-avatar
                      color="teal"
                      text-color="white"
                      icon="bluetooth"
                    />
                  </q-item-section>

                  <q-item-section
                    >Avatar-type Avatar-type Avatar-type icon</q-item-section
                  >
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
      <div class="q-pa-lg flex q-my-md flex-center">
        <q-pagination
          v-model="current"
          color="orange-8"
          :max="5"
          direction-links
          boundary-links
          icon-first="skip_previous"
          icon-last="skip_next"
          icon-prev="fast_rewind"
          icon-next="fast_forward"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: "",
    };
  },
};
</script>
