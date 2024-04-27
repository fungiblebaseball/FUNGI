import { generateName } from './NamesGen.ts';
import { AttribToArray } from './AttribGenArray.ts';
import { Player } from "./../common/class.ts"; 
async function main() {
  try {
    const name = await generateName();
    const attribList = await AttribToArray(4); // Ottieni la lista
    //const attribArray = await attribList(); // Trasforma la lista in un array
    const PlayerAttrib = new Player(name, attribList[0], attribList[1], attribList[2], attribList[3])  ;  
    
    console.log(PlayerAttrib.Name, PlayerAttrib.Pitching, PlayerAttrib.Batting, PlayerAttrib.Fielding, PlayerAttrib.Running);
    // Aggiungi qui il codice per utilizzare l'array come necessario
  } catch (error) {
    console.error('Error:', error);
    // Gestisci l'errore
  }
}

main();