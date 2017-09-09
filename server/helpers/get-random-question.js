import _ from 'lodash';

import countriesWithCapitals from '../data/countries-with-capitals.json';
import cities from '../data/cities.json';

export default function () {
  const countries = Object.keys(countriesWithCapitals);
  const randomIdx = Math.floor(Math.random() * countries.length);
  const country = countries[randomIdx];

  // Start by adding actual capital to possible answers, then add three more random cities.
  let answers = [countriesWithCapitals[country]];
  const citiesArr = cities.cities;
  while (answers.length < 4) {
    const randomIdx2 = Math.floor(Math.random() * citiesArr.length);
    const city = citiesArr[randomIdx2];
    if (answers.indexOf(city) === -1) {
      answers.push(city);
    }
  }
  // Shuffle answers so correct answer isn't always number one.
  answers = _.shuffle(answers);
  return {
    country,
    answers,
  };
}
