<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <div
          v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '25%' }"
        >
          <div class="text-center">
            <q-avatar size="103px" class="text-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
              />
            </q-avatar>
          </div>

          <q-card class="q-pa-xl">
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">Log in</div>
            </div>

            <q-form class="q-gutter-md">
              <div class="text-capton text-bold">Email</div>
              <q-input outlined v-model="username" dense lazy-rules />

              <div class="text-capton text-bold">Email</div>
              <q-input
                type="password"
                outlined
                v-model="password"
                dense
                lazy-rules
              />

              <div>
                <q-btn
                  label="Login"
                  to="/"
                   class="full-width"
                   no-caps
                  type="button"
                  dense
                  color="primary"
                />
              </div>
            </q-form>
          </q-card>

          <div class="text-subtitle2 text-center q-my-lg">
              Don’t have an account? <span class="text-primary">Sign up</span> 
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  setup() {
    return {
      username: ref("Pratik"),
      password: ref("12345"),
    };
  },
});
</script>

<style></style>
