import { api } from "boot/axios";

export default {
  addAnswer(answerId) {
    return api.post(`answer`, answerId);
  },
  getAnswers(answerId) {
    return api.get(`answer/${answerId}/answers`);
  },
};
