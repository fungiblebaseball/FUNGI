
import { generateTeamName } from './TeamNameGen.ts';
import { PlayerGen}
import { Player, Roster } from "./../common/class.ts"; 

const TeamName = generateTeamName();
const Squad: Roster[]
const attributes: number[] = [];
    for (let i = 0; i < 9; i++) {
      const attribute = getRandomNumber(30, 80); // Genera un numero tra 30 e 80
      attributes.push(attribute);
    }
for generateTeamName(): string {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomAnimal = animals();
    return `${randomAdjective} ${randomAnimal}`;
  }
  
  // Number of generated Teams, set "i" value
  for (let i = 0; i < 1; i++) {
    console.log(generateTeamName()+ 's');
  }