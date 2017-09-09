import capitalCities from './capital-cities-questions.json';

exports.handler = function (event, context, callback) {
  console.log('EVENT', event);
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(capitalCities),
  };

  console.log(response);

  callback(null, response);
};
