import { PlayerGen } from './generators/PlayerGen.ts';
import { Squad } from "../common/class.ts"; 
import { CallPlayer } from './DB_functions/readData/PlayerForRole.ts';
import { getTeamName }from './DB_functions/readData/tnameForId.ts';

//const T= 115;
//const T= 116;
//const pos= 'P';
export async function generateTeam(T:number) {
  try {
    const TeamName = await getTeamName(T); // Genera il nome del team
    const Pitcher = await CallPlayer ('P',T);
    const Catcher = await CallPlayer ('C',T);
    const fstBaseman = await CallPlayer ('1B',T);
    const sndBaseman = await CallPlayer ('2B',T);
    const trdBaseman = await CallPlayer ('3B',T);
    const shortStop = await CallPlayer ('SS',T);
    const lOutfielder = await CallPlayer ('LF',T);
    const cOutfielder = await CallPlayer ('CF',T);
    const rOutfielder = await CallPlayer ('RF',T);
if(TeamName&&Pitcher&&Catcher&&fstBaseman&&sndBaseman&&trdBaseman&&shortStop&&lOutfielder&&cOutfielder&&rOutfielder){
    const squad = new Squad(
      TeamName,
      Pitcher,
      Catcher,
      fstBaseman,
      sndBaseman,
      trdBaseman,
      shortStop,
      lOutfielder,
      cOutfielder,
      rOutfielder
    );

    return squad; 
   }
  } catch (error) {
    console.error('Error during team generation:', error);
    return null; // In caso di errore, restituisco null
  }
}

export async function GiveTeam(T:number) : Promise  <Squad | any> {
  
  await generateTeam(T).then(squad => {
  if (squad) {
    console.log("Squadra generata:", squad);
  } else {
    console.log("Errore durante la generazione della squadra.");
  }
}); 
}