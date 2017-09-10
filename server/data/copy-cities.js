/* Lazy script so I don't have to copy each city into separate json array manually.
  Also ensures no spelling discrepencies between two files */

const fs = require('fs');

const countriesWithCapitals = require('./countries-with-capitals');

const countries = Object.keys(countriesWithCapitals);
let cities = [];
for (const country of countries) { // eslint-disable-line no-restricted-syntax
  cities.push(countriesWithCapitals[country]);
}

// Put into alphabetical order, though not really necessary.
cities = cities.sort();

fs.writeFileSync('./cities.json', JSON.stringify({ cities }, null, 2));
