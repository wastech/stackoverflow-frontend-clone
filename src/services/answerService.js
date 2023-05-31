import Api from "../services/Api";

export default {
  addAnswer(answerId) {
    return Api().post(`answer`, answerId);
  },
  getAnswers(answerId) {
    return Api().get(`answer/${answerId}/answers`);
  },
};
