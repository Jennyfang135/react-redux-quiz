import { GET_QUESTIONS } from '../actions/get-questions';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS: {
      // const countries = Object.keys(action.payload.data);
      // const randomIdx = Math.floor(Math.random() * countries.length);
      // const country = countries[randomIdx];
      // const answers = action.payload.data[country];
      // return {
      //   country,
      //   answers,
      // };
      return action.payload.data;
    }
    default:
      return state;
  }
}
