import countriesWithCapitals from '../data/countries-with-capitals.json';

export default function checkAnswer(country, userAnswer) {
  const city = countriesWithCapitals[country];
  const correct = userAnswer === city;
  return {
    correct,
    correctAnswer: city,
    userAnswer,
  };
}
