import { Colored } from "../common/class.ts";
import { hit } from "../game_utils/hit.ts";
import { vari,betaRandom } from "../game_utils/scrumble.ts"
import { trajectory } from "../common/types.ts";

export function bat(batter: number, pitcher: number):[number , trajectory]  | number | undefined  {
   
  const b = vari(batter);
  const p = vari(pitcher);
  const strike = betaRandom(1.4,1,30,70);
  const hitz = betaRandom(1.4,1,1,90);
  const m= Math.floor((p+strike)/2);  
  
    if (m>b+5) {
      Colored.Clog("STRIKE OUT","red");     
        return 0 ;              //  Strike looking
    } 
    if (hitz>p) {
      Colored.Clog("BASE","green");
      return 2;
    } 

const event: trajectory = hit(1);  //  HIT SIMULATION
 
    if (b-m < -15&&(event.L='P')) {
      Colored.Clog("CANDLE Pop over the Pitcher","cyan"); 
      console.log(event.L)   ; 
        return [3,event] ;              //  Swing and Miss
    } 
    if ((-15 < (b-m )&& (b-m )< -0)&&(event.L !='P'||'CF'||'LF'||'RF')) {
      Colored.Clog("HIGH Fly Ball for the Infield","cyan");     
      console.log(event.L)   ;
        return [3,event] ;              //  FLY
    }                                                                                                   
    if (b-m >0 && b-m < 20 && (event.L = ('CF'||'LF'||'RF'))) {
      Colored.Clog("DEEP Fly Ball over the Outfielder","cyan");     
      console.log(event.L)   ;
        return [4,event] ;              //  FLY
    } 
    if (b-m >0 && b-m < 20 && (event.L = ('CF'||'LF'||'RF')) && (!event.B)) {
      Colored.Clog("Ground Ball the Outfielder","cyan");     
      console.log(event.L)   ;
        return [4,event] ;              //  FLY
    } 
    if (b > m+5) {
      Colored.Clog("Clean HIT","green");     
      console.log(event.L)   ;
        return [4,event] ;              // HIT 
    }     
    if (b > m&&b < m+5 ){
        Colored.Clog("In Play","yellow");     
        console.log(event.L)   ;
          return [1,event] ;              // HIT         
    } else  {
      Colored.Clog("In Play","yellow");
      console.log(event.L)   ;
       return [1,event] ;            //  CONTACT  
    } 
    }