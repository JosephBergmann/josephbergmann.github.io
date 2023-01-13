const axios = require('axios');

const title = 'New York City';
const prop = 'extracts';
const format = 'json';
const action = 'query';

axios.get(`https://en.wikipedia.org/w/api.php?action=${action}&titles=${title}&prop=${prop}&format=${format}`)
  .then(response => {
    const populationRegex = /(population[^\d]*)(\d+[\,\d]*)/gi;
    let population = populationRegex.exec(response.data.query.pages[Object.keys(response.data.query.pages)[0]].extract);
    console.log(`The population of ${title} is ${population[2]}`);
  })
  .catch(error => {
    console.log(error);
  });
