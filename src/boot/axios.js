import store from "../store/index";
import { boot } from "quasar/wrappers";
import axios from "axios";

const api = axios.create({
  baseURL: "https://stack-overflow-api-clone.onrender.com/api/v1",
  headers: {
    Authorization: `Bearer ${store.state.token}`,
  },
});

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { axios, api };
