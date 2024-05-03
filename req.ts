import { Squad } from "./common/class.ts";
import{ GiveTeam} from "./DB_utils/TeamGen.ts"

//const SquadA =  await GiveTeam(115); 
const S1 :Squad= await GiveTeam(115);
//const SquadB = await GiveTeam(116);
const S2= await GiveTeam(116);


console.log("S1: ", (S1.Pitcher));
