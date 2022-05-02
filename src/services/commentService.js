import { api } from "boot/axios";

export default {
  addcomment(comment) {
    return api.post(`comments`, comment);
  },
  getComments(postId) {
    return api.get(`comments/${postId}/comments`);
  },
};
