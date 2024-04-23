import { perform, betaRandom, betaConfront} from "../utils/scrumble.ts";
import { hit } from "../utils/hit.ts";

export function inplay (runner:number,defence:number,range:number):number | undefined {
   // const c = Math.random() * 0.2 + 0.9; // Coefficiente di casualità tra 0.9 e 1.1
   // const event = Math.floor(Math.random() * range) ; 
    let attack = perform(runner,betaRandom(2,1,30,60));
    let infield = perform(defence,betaRandom(2,1,30,70)) ;

    //let [t,d]=hit(1);
     if (attack && infield ) {
        //if (betaConfront(runner+30,0,3,20,defence)) {
        if (attack) {
        console.log("HIT");                  //  HIT
        return 5; 
        } //else if (attack && infield){             //  F                                                                      
           // console.log("Ground OUT");
         //    return 6;             //  ERROR
        // }           
        
    } else if (!attack && infield){
       console.log("Putted OUT");
        return 6;             //  GROUND OUT
    } else if (!attack && !infield){
       console.log("ERROR");
        return 7;
    } 

    return undefined;
} 