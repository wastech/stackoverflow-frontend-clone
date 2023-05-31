import Api from "../services/Api";

export default {
  addQuestion(question) {
    return Api().post("question", question);
  },
  upvote(upvote) {
    return Api().post(`question/upvote/${upvote}`);
  },
  getQuestions() {
    return Api().get("question");
  },
  getTags() {
    return Api().get("question/listTags");
  },
  showQuestion(questionId) {
    return Api().get(`question/${questionId}`);
  },
  sigleUserPosts(userId) {
    return Api().get(`questions/userpost/${userId}`);
  },
  getCategories(categoryId) {
    return Api().get(`questions/category/${categoryId}`);
  },
  getRelated(relatedId) {
    return Api().get(`questions/related/${relatedId}`);
  },

  getTagged(tagsId) {
    return Api().get(`question/qtags/${tagsId}`);
  },
  addcomment(comment) {
    return Api().post(`comments`, comment);
  },
  getComments(postId) {
    return Api().get(`comments/${postId}/comments`);
  },

  deleteData(ID) {
    return Api().delete(`events/${ID}`);
  },
  getRelated(relatedId) {
    return Api().get(`events/related/${relatedId}`);
  },
};
