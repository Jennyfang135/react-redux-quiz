import { CHECK_ANSWER } from '../actions/check-answer';
import { GET_QUESTIONS } from '../actions/get-questions';

export default function (state = {}, action) {
  switch (action.type) {
    case CHECK_ANSWER: {
      return action.payload.data;
    }
    case GET_QUESTIONS: {
      return {};
    }
    default: {
      return state;
    }
  }
}
