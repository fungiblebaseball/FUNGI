import { Colored } from "../common/class.ts";
import { hit } from "../game_utils/hit.ts";
import { vari,betaRandom } from "../game_utils/scrumble.ts"
import { trajectory } from "../common/types.ts";

export function bat(batter: number, pitcher: number):[number , trajectory]  | number | undefined  {
  
  const strike = betaRandom(1.4,1,30,70);
  const b = vari(batter);
  const p = vari(pitcher);

  const m= Math.floor((p+strike)/2);  
  
  //console.log("strike",strike,"batter",b,"pitcher",m);
    if (m>batter*1.21) {
      Colored.Clog("STRIKE OUT","red");     
        return 0 ;              //  Strike looking
    } 
    if (strike<p*1.05) {
      Colored.Clog("BASE","green");
      return 2;
    } 

const event: trajectory = hit(1);  //  HIT SIMULATION
 
    if (b-m < -20&&(event.L=1)) {
      Colored.Clog("CANDLE POP over the Catcher","cyan");     
        return [3,event] ;              //  Swing and Miss
    } 
    if (b-m < -20&&(event.L<=6)) {
      Colored.Clog("HIGH FLY BALL for the Infield","cyan");     
        return [3,event] ;              //  FLY
    }  
    if (b-m < -20&&(event.L>6)) {
      Colored.Clog("DEEP FLY BALL over the Outfielder","cyan");     
        return [3,event] ;              //  FLY
    } 
    if (b > m ) {
      Colored.Clog("HIT","green");     
        return [4,event] ;              // HIT   
    } else  {
      Colored.Clog("In Play","yellow");
        return [1,event] ;            //  CONTACT  
    } 
    }