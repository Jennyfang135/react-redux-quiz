import checkAnswer from './helpers/check-answer';
import getRandomQuestion from './helpers/get-random-question';

exports.handler = function (event, context, callback) {
  console.log('EVENT', JSON.stringify(event));

  let body;
  if (event.resource === '/question') {
    body = getRandomQuestion();
  } else if (event.resource === '/answer') {
    const bodyObj = JSON.parse(event.body);
    const country = bodyObj.country;
    const userAnswer = bodyObj.city;
    body = checkAnswer(country, userAnswer);
  }

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body),
  };

  console.log('RESPONSE', JSON.stringify(response));

  callback(null, response);
};
