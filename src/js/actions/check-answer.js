import axios from 'axios';

export const CHECK_ANSWER = 'CHECK_ANSWER';

const URL = 'https://api.myjson.com/bins/14pzw9';

export function checkAnswer(country, city) {
  console.log(country, city);

  const request = axios.get(URL)
                    .catch(err => console.log(`ERROR GETTING QUESTION: ${err}`)); // eslint-disable-line

  return {
    type: CHECK_ANSWER,
    payload: request,
  };
}
