// This Function generate the HIT 
import { trajectory } from "../common/types";
export function hit(attrib: number): trajectory {
     
    const t :string = Math.random() < 0.6 ? "GroundBall" : "FlyBall";   // The hit is a ground ball or a fly ball
    const b :boolean = t === "FlyBall";    
    const destination :number = Math.floor(Math.random() * 9) + 1;              // Randomize the location, whitch fielder is involved
    let traj :trajectory = {B:b, T:t, L:t};
    let comment = '';
    switch (destination) {                                                      // Compose the HIT comment, what happend.
        case 1:
            comment = `${t} on Pitcher`;
            traj.L='P';
            break;                              
        case 2:
            comment = `${t} Right to the Catcher`;
            traj[2]='C';
            break;
        case 3:
            comment = `${t} for the 1st Baseman`;
            traj[2]='1B';
            break;
        case 4:
            comment = `${t} for the 2nd Baseman`;
            traj[2]='2B';
            break;
        case 5:
            comment = `${t} to the 3rd Baseman`;
            traj[2]='3B';
            break;
        case 6:
            comment = `${t} on the ShortStop`;
            traj[2]='SS';
            break;
        case 7:
            comment = `${t} for the LFielder`;
            traj[2]='LF';
            break;
        case 8:
            comment = `${t} to the CFielder`;
            traj[2]='CF';
            break;
        case 9:
            comment = `${t} to the RFielder`;
            traj[2]='RF';
            break;
        case 10:
            comment = `${t} to the moon`;
            break;
    }

   console.log(comment);                              // Outut the HIT comment, what happend.

                                                    // Return the Trajectory
    return traj;
}
