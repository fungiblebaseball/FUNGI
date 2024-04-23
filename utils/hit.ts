import { trajectory } from "./types";
export function hit(attrib: number): trajectory {
    // Decidi se la palla è al volo o a terra
    const t :string = Math.random() < 0.5 ? "GroundBall" : "FlyBall";
    const b :boolean = t === "FlyBall";
    // Genera un numero casuale per la destinazione
    const Loc :number = Math.floor(Math.random() * 9) + 1;
    let traj :trajectory = {B:b, T:t, L:Loc};
    let event = '';

    // Determina l'evento in base alla destinazione
    switch (Loc) {
        case 1:
            event = `${t} on Pitcher`;
            break;
        case 2:
            event = `${t} Right to the Catcher`;
            break;
        case 3:
            event = `${t} for the 1st Baseman`;
            break;
        case 4:
            event = `${t} for the 2nd Baseman`;
            break;
        case 5:
            event = `${t} to the 3rd Baseman`;
            break;
        case 6:
            event = `${t} on the ShortStop`;
            break;
        case 7:
            event = `${t} for the LFielder`;
            break;
        case 8:
            event = `${t} to the CFielder`;
            break;
        case 9:
            event = `${t} to the RFielder`;
            break;
        case 10:
            event = `${t} to the moon`;
            break;
    }

    // Log del risultato
   console.log(event);

    // Restituisci se la palla è al volo e l'evento
    return traj;
}
