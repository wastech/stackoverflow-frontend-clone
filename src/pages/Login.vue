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
              <div class="text-capton text-bold">Email</div>
              <q-input
                outlined
                ref="email"
                v-model="email"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
                dense
              />

              <div class="text-capton text-bold">Password</div>
              <q-input
                outlined
                v-model="password"
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
                dense
                lazy-rules
                ref="password"
                :type="isPwd ? 'password' : 'text'"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>

              <div>
                <q-btn
                  label="Login"
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
            Don’t have an account?
            <span class="text-primary"><a href="/signup">Sign up</a> </span>
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
    };
  },
  methods: {
    onSubmit() {
      this.$refs.email.validate();
      this.$refs.password.validate();
      this.login();
    },
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        if (this.$route.query.from) {
          return this.$router.replace(this.$route.query.from);
        } else {
          this.$router.push({
            path: "/",
          });
        }
        this.$q.notify({
          type: "positive",
          timeout: 1000,
          position: "center",
          message: "success",
        });
        this.$router.push("/");
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
