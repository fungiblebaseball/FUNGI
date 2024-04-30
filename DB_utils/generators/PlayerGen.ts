import { generateName } from './NamesGen.ts';
import { AttribToArray } from './AttribGenArray.ts';
import { Player } from "../../common/class.ts"; 
export async function PlayerGen(): Promise<Player | any>  {
  try {
    const name = await generateName(); 
    const attribList = await AttribToArray(4); //
    const PlayerAttrib = new Player(name, attribList[0], attribList[1], attribList[2], attribList[3])  ;  
    console.log  (PlayerAttrib.Name);
  return (PlayerAttrib);
    
  } catch (error) {
    console.error('Error:', error);
    
  }
}
