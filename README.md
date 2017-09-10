# Capital Cities Quiz

App can be viewed [here](https://mdlewis.co.uk/react-redux-quiz/).

Built using React and Redux on the front end, with a Node.js AWS Lambda function on the back end.

## Commands

To install node modules run ````npm install````

Start webpack-dev-server by running ````npm start```` then access by navigating to localhost:8080 from your web browser.

Create production build by running ````npm run build```` and deploy using ````npm run deploy````

Lambda function is deployed separately using the serverless framework with ````npm run deploy-lambda```` and updated with ````npm run update-lambda````

## TODO
* Cover all countries/capitals, currently only countries A - F.
* Integrate with Google Maps API to display location of cities.
* Maybe add some kind of timer.
* Keep track of best score in local storage.
* Don't repeat questions already seen - currently there is the unlikely possibility of seeing same question twice in a row.
* Maybe add some pictures.
* Refactor using GraphQL.
* Different game modes e.g. text input instead of multiple choice.
* Currently fairly minimal styling, especially need to add more media queries for responsiveness. Only tested on 15inch laptop and iPhone 6S screen.
* Unit tests!
