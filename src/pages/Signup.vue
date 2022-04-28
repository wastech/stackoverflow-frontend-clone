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

            <q-form class="q-gutter-md" @submit.prevent="onSubmit">
              <div class="text-capton text-bold">Display Name</div>
              <q-input
                outlined
                v-model="username"
                :rules="[(val) => !!val || 'Field is required']"
                dense
                lazy-rules
              />

              <div class="text-capton text-bold">Email</div>
              <q-input
                outlined
                v-model="email"
                :rules="[(val) => !!val || 'Field is required']"
                dense
                lazy-rules
              />

              <div class="text-capton text-bold">Password</div>
              <q-input
                type="password"
                outlined
                :rules="[(val) => !!val || 'Field is required']"
                v-model="password"
                dense
                lazy-rules
              />

              <div>
                <q-btn
                  label="Sign Up"
                  class="full-width"
                  no-caps
                  type="submit"
                  dense
                  color="primary"
                />
              </div>
            </q-form>
          </q-card>

          <div class="text-subtitle2 text-center q-my-lg">
            Already have an account? <span class="text-primary">Login</span>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
// inside of a Vue file
// import { useQuasar } from 'quasar'
import AuthenticationService from "../services/AuthenticationService";
export default {
  data() {
    return {
      password: "",
      isPwd: true,
      email: "",
      username: "",
    };
  },
  methods: {
    onSubmit() {
      this.login();
    },
    async login() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
          username: this.password,
        });

        this.$q.notify({
          type: "positive",
          timeout: 1000,
          position: "center",
          message: "success",
        });
        this.$router.push({
          name: "login",
        });
      } catch (error) {
        console.log("this is error", error.response.data.error);
        this.$q.notify({
          type: "negative",
          timeout: 500,
          position: "center",
          message: error.response.data.error,
        });
      }
    },
  },
};
</script>

<style></style>
