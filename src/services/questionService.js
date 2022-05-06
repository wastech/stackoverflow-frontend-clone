import { api } from "boot/axios";

export default {
  addQuestion(question) {
    return api.post("question", question);
  },
  upvote(upvote) {
    return api.post(`question/upvote/${upvote}`);
  },
  getQuestions() {
    return api.get("question");
  },
  getTags() {
    return api.get("question/listTags");
  },
  showQuestion(questionId) {
    return api.get(`question/${questionId}`);
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

  getTagged(tagsId) {
    return api.get(`question/qtags/${tagsId}`);
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
