import { api } from "boot/axios";

export default {
  createPost(question) {
    return api.post("questions", question);
  },
  getQuestions() {
    return api.get("questions");
  },
  showquestion(questionId) {
    return api.get(`questions/${questionId}`);
  },
  sigleUserPosts(userId) {
    return api.get(`questions/userpost/${userId}`);
  },
  getCategories(categoryId) {
    return api.get(`questions/category/${categoryId}`);
  },
  getRelated(relatedId) {
    return api.get(`questions/related/${relatedId}`);
  },

  getTags(tagsId) {
    return api.get(`questions/tags/${tagsId}`);
  },
  addcomment(comment) {
    return api.post(`comments`, comment);
  },
  getComments(postId) {
    return api.get(`comments/${postId}/comments`);
  },

  deleteData(ID) {
    return api.delete(`events/${ID}`);
  },
  getRelated(relatedId) {
    return api.get(`events/related/${relatedId}`);
  },
};
