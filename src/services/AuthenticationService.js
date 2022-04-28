import { api } from "boot/axios";

export default {
  register(credentials) {
    return api.post("auth/register", credentials);
  },
  login(credentials) {
    return api.post("/auth/login", credentials);
  },
  update(credentials) {
    return api().put("auth/updatedetails", credentials);
  },

  user() {
    return api().get("auth/me");
  },

  users() {
    return api().get("users");
  },
  updatepass() {
    return api().put("auth/updatepassword");
  },
  delete(userId) {
    return api().delete(`auth/admin/user/${userId}`);
  },
  delete(userId) {
    return api().delete(`users/${userId}`);
  },
};
