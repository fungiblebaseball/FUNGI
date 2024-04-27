import { PlayerGen } from './generators/PlayerGen.ts';
import { Squad } from "../common/class.ts"; 
import { generateTeamName } from './generators/SquadNameGen.ts';

export async function generateTeam() {
  try {
    const TeamName = await generateTeamName(); // Genera il nome del team
    const Pitcher = await PlayerGen();
    const Catcher = await PlayerGen()|| null;;
    const fstBaseman = await PlayerGen()|| null;;
    const sndBaseman = await PlayerGen()|| null;;
    const trdBaseman = await PlayerGen()|| null;;
    const shortStop = await PlayerGen()|| null;;
    const lOutfielder = await PlayerGen()|| null;;
    const cOutfielder = await PlayerGen()|| null;;
    const rOutfielder = await PlayerGen()|| null;;

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
  } catch (error) {
    console.error('Error during team generation:', error);
    return null; // In caso di errore, restituisco null
  }
}

generateTeam().then(squad => {
  if (squad) {
    console.log("Squadra generata:", squad);
  } else {
    console.log("Errore durante la generazione della squadra.");
  }
});