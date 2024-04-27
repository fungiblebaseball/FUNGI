import { Colored } from "../common/class.ts";
import { vari,betaRandom } from "../game-utils/scrumble.ts";
import { trajectory, } from "../common/types.ts";

export function inplay (runner:number,defence:number,range:trajectory):number | undefined {  
  const P = betaRandom(1.4,0.5,30,70);
  const r = vari(runner);
  const d = vari(defence);
  const event = range ;
  const m= Math.floor((r+P)/2);  
  //console.log(event);
  //console.log("hit",P,"runner",r,"Defence",d,"event",event.B);
  if (m-r>15 && !range.B) {
   Colored.Clog("TAG OUT", "red");   
      return 6 ;              //  Assistence OUT
  } 
  if (P>d*1.4) {
   Colored.Clog("ERROR", "magenta");
    return 8;
  }
  if (d>m &&!event.B) {
   Colored.Clog("GROUND OUT","red");
   return 6;
 } 
 if (d>m &&event.B) {
   Colored.Clog("FLY OUT","red");
   return 7;
 }  
 if (m>d) {
   Colored.Clog("Super HIT","green");
   return 5;
 }      

    return undefined;
} 