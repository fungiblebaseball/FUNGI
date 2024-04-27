//const fetch = require('isomorphic-fetch'); // Uncomment this line if running in Node.js

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Unable to fetch data:', error);
  }
}

async function fetchNames(nameType) {
  return fetchData(`https://www.randomlists.com/data/names-${nameType}.json`);
}

async function generateName() {
  try {
    const response = await Promise.all([
      fetchNames(pickRandom(['male', 'female'])),
      fetchNames('surnames')
    ]);

    const [firstNames, lastNames] = response;

    const firstName = pickRandom(firstNames.data);
    const lastName = pickRandom(lastNames.data);

    return `${firstName} ${lastName}`;
  } catch (error) {
    console.error('Unable to generate name:', error);
  }
}

async function logRandomName() {
  const name = await generateName();
  console.log(name);
}

//const g = pickRandom(['male', 'female']);
logRandomName();