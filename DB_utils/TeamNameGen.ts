import adjectives from 'adjectives';
import animals from 'animals';

function generateTeamName(): string {
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomAnimal = animals();
  return `${randomAdjective} ${randomAnimal}`;
}

// Number of generated Teams, set "i" value
for (let i = 0; i < 1; i++) {
  console.log(generateTeamName()+ 's');
}