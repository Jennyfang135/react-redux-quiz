import countriesWithCapitals from '../data/countries-with-capitals.json';

export default function checkAnswer(country, userAnswer) {
  const city = countriesWithCapitals[country];
  const correct = userAnswer === city;
  console.log('CITY', city);
  console.log('correct', correct);
  return {
    correct,
    correctAnswer: city,
  };
}
