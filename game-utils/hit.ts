// This Function generate the HIT 
import { trajectory } from "../common/types";
export function hit(attrib: number): trajectory {
     
    const t :string = Math.random() < 0.5 ? "GroundBall" : "FlyBall";   // The hit is a ground ball or a fly ball
    const b :boolean = t === "FlyBall";    
    const Loc :number = Math.floor(Math.random() * 9) + 1;              // Randomize the location, whitch fielder is involved
    let traj :trajectory = {B:b, T:t, L:Loc};
    let event = '';
    switch (Loc) {                                                      // Compose the HIT event, what happend.
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

   console.log(event);                              // Outut the HIT event, what happend.

                                                    // Return the Trajectory
    return traj;
}
