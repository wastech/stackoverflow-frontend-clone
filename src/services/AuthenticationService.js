import Api from "../services/Api";

export default {
  register(credentials) {
    return Api().post("auth/register", credentials);
  },
  login(credentials) {
    return Api().post("/auth/login", credentials);
  },
  update(credentials) {
    return Api().put("auth/updatedetails", credentials);
  },

  users() {
    return Api().get("/users");
  },
  profile() {
    return Api().get("auth/me");
  },
  delete(userId) {
    return Api().delete(`auth/admin/user/${userId}`);
  },
  user(userId) {
    return Api().get(`users/${userId}`);
  },
};
