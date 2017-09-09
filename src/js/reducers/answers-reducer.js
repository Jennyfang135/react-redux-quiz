import { CHECK_ANSWER } from '../actions/check-answer';

export default function (state = {}, action) {
  switch (action.type) {
    case CHECK_ANSWER: {
      console.log('CHECK ANSWER PAYLOAD', action.payload.data);
      return action.payload.data;
    }
    default:
      return state;
  }
}
