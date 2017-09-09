import getRandomQuestion from './helpers/get-random-question';

exports.handler = function (event, context, callback) {
  console.log('EVENT', event);

  let body;
  if (event.resource === '/question') {
    body = getRandomQuestion();
  }

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body),
  };

  console.log('RESPONSE', response);

  callback(null, response);
};
