//import fetch from 'isomorphic-fetch';

function pickRandom<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Unable to fetch data:', error);
    throw error; // Rilancio l'errore per gestirlo nell'altro script, se necessario
  }
}

async function fetchNames(nameType: string) : Promise <any>  {
  return fetchData(`https://www.randomlists.com/data/names-${nameType}.json`);
}

export async function generateName(): Promise<string> {
  try {
    const response = await Promise.all([
      fetchNames(pickRandom(['male', 'female'])),
      fetchNames('surnames')
    ]);

    const [firstNames, lastNames] = response;

    const firstName = pickRandom(firstNames.data);
    const lastName = pickRandom(lastNames.data);
// const completeName = [(firstName), (lastName)];
return `${firstName} ${lastName}`;
  } catch (error) {
    console.error('Unable to generate name:', error);
    throw error; // Rilancio l'errore per gestirlo nell'altro script, se necessario
  }
}