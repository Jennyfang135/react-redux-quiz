import axios from 'axios';

export const GET_QUESTIONS = 'GET_QUESTIONS';

const URL = 'https://api.myjson.com/bins/12kmeh';

export function getQuestions() {
  const request = axios.get(URL)
                    .catch(err => console.log(`ERROR GETTING QUESTION: ${err}`)); // eslint-disable-line

  return {
    type: GET_QUESTIONS,
    payload: request,
  };
}
