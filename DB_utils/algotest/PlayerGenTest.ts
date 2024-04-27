import { generateName } from '../generators/NamesGen.ts';
import { AttribToArray } from '../generators/AttribGenArray.ts';
import { Player } from "../../common/class.ts"; 
import{ PlayerGen } from "../generators/PlayerGen.ts"; 
async function main() {
  try {
    const Player   = await PlayerGen();
    //console.log(team);

    
    console.log(Player);
    // Aggiungi qui il codice per utilizzare l'array come necessario
  } catch (error) {
    console.error('Error:', error);
    // Gestisci l'errore
  }
}

main();