import Api from "../services/Api";

export default {
  addcomment(comment) {
    return Api().post(`comments`, comment);
  },
  getComments(postId) {
    return Api().get(`comments/${postId}/comments`);
  },
};
