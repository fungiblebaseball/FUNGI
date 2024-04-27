import adjectives from 'adjectives';
import animals from 'animals';

export function generateTeamName(): string {
  const filteredAdjectives = adjectives.filter(adj => adj.length <= 4);

  // Seleziona casualmente un aggettivo filtrato
  const randomAdjective = filteredAdjectives[Math.floor(Math.random() * filteredAdjectives.length)];

  const randomAnimal = animals();
  return `${randomAdjective} ${randomAnimal}s`;
}

// Number of generated Teams, set "i" value
for (let i = 0; i < 0; i++) {
  console.log(generateTeamName());
}