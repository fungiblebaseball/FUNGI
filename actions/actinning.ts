import { Player, Squad, Team } from "../common/class.ts";
import { inning, base,trajectory } from "../common/types.ts";
import { bat } from "./bat.ts";
import { inplay } from "./inplay.ts";
import { loadBase , lob} from "./base.ts";
import { CallPlayer } from "../DB_utils/DB_functions/readData/PlayerForRole.ts";
import { CallBatter } from "../DB_utils/DB_functions/readData/pnameForLineUp.ts";

export async function actInning(TeamB: number,ABat:number, TeamD:number) : (Promise <inning>){
    let out = 0;
    let b: base ={1:false,2:false,3:false};
    let inn: inning ={ s:0,h:0,e:0,k:0,b:0,po:0,fo:0,lob:0,lab:ABat };
    let pitcher = await CallPlayer('P', TeamD);
    if (!pitcher || (pitcher == null)) { 
        console.error('error')} 
    else {
    const Py=  new Player(pitcher?.Name,pitcher?.Role,pitcher?.LineUp,pitcher?.Pitching,pitcher?.Batting,pitcher?.Fielding,pitcher?.Running);
    console.log("Pitcher ",Py.Name, " on the mound:",out);
    while (out < 3) {
        
        let batter = await CallBatter(inn.lab, TeamB); 
        if (!batter|| (batter==null)) { 
            console.error('error');
        } 
        else { 
            const Bt=  new Player(batter.Name,batter.Role,batter.LineUp,batter.Pitching,batter.Batting,batter.Fielding,batter.Running);
            inn.lab=batter.LineUp;
            console.log ("at Bat:",(Bt.Name), 'out:',(out));

            let play = bat(Bt.Batting, Py.Pitching);
            
            if (typeof play === 'number') {
                switch (play) {
                case 0:                       //////////////    K
                    out++; 
                    inn.k++;
                    inn.lab++;               
                break;
                case 2:                        /////////////   Base on Ball
                    let[anb, asc] = loadBase(b, 1);
                    b=anb; inn.s=inn.s+asc; inn.b++;inn.lab++; //console.log("lob",b);               
                break;
                } 
            } 
            else if (Array.isArray(play) && typeof play[0] === 'number' ){
                    // If play = tuple that include a num 
                    const num = play[0];
                    const trajectoryData :trajectory = play[1];
                    switch (num) {
            
                    case 3:                         ////////////    FLY Out
                        out++; inn.fo++;inn.lab++; //console.log("lob",inn.lob);   
                    break;

                    case 4:                         // /////////    HIT
                        let [nb, sc] = loadBase(b, 1);inn.lab++;
                    break;

                    case 1:                         // /////////    IN PLAY
                        let fielder = await CallPlayer('P', TeamD);
                        
                        if (!fielder || (fielder == null)) { 
                            console.error('error');
                        } 
                        else { 
                            const Fi=  new Player(fielder.Name,fielder.Role,fielder.LineUp,fielder.Pitching,fielder.Batting,fielder.Fielding,fielder.Running);
                            console.log("Fielder ",(Fi.Name),(Fi.Role), " nearby the Play:",(out));
                            let g = inplay(Bt.Running,Fi.Fielding,trajectoryData)
                            switch (g) {
                            case 5:                 //////////////  HIT
                                let [nb, sc] = loadBase(b, 1); //new bases loads, runs socred
                                b=nb; inn.s=inn.s+sc; inn.h++ ;inn.lab++;//console.log("lob",b);
                            break;
                            //console.log("baserunnerrrr ",b);       
                            case 6:                 //////////////  PUTTED-GROUND-TAG OUT
                                out++; inn.po++;inn.lab++; //console.log("lob",b);    
                            break;
                            case 7:                 //////////////  FLY OUT
                                out++; inn.fo++;inn.lab++; //console.log("lob",b);   
                            break;

                            case 8:                 ////////////    Error
                                let [nb1, sc1] = loadBase(b, 1);
                                b=nb1; inn.s=inn.s+sc1;inn.lab++;
                                inn.s++; inn.e++; //console.log("lob",b); 
                            break; 
                            } 
                        }                       
                    break;
            
                    default:
                    console.log ("error"); 
                    break;      // Exceptions
                    }    
                }
           // if ((inn.lab=0)|(inn.lab=9)) {inn.lab=1;
           // }      
            }              
    } 
    }
    console.log("runs",inn.s,"out",out,"lob ",lob(b));
    inn.lob = lob(b);
    

return inn;

}
    
