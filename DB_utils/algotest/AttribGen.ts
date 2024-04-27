import { AttribToArray } from '../generators/AttribGenArray.ts';

async function main() {
  try {
    const attribList = await AttribToArray(4); // Gen Attribs
    //const attribArray = await attribList(); // to array
        
    console.log(attribList);
    // Aggiungi qui il codice per utilizzare l'array come necessario
  } catch (error) {
    console.error('Error:', error);
    // Gestisci l'errore
  }
}

main();