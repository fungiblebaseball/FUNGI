import { Player, Squad, Team } from "../common/class.ts";
import { inning, base,trajectory } from "../common/types.ts";
import { bat } from "./bat.ts";
import { inplay } from "./inplay.ts";
import { loadBase , lob} from "./base.ts";
import { CallPlayer } from "../DB_utils/DB_functions/readData/PlayerForRole.ts";
import { CallBatter } from "../DB_utils/DB_functions/readData/pnameForLineUp.ts";
import { statUpd } from "../DB_utils/generators/pstatUpdater.ts";

export async function actInning(TeamBy: number,ABat:number, TeamDef:number) : (Promise <inning>){
    let aaba= ABat;
    let out = 0;
    let b: base ={1:false,2:false,3:false};
    let inn: inning ={ s:0,h:0,e:0,k:0,b:0,po:0,fo:0,lob:0,lab:aaba };
    let pitcher = await CallPlayer('P', TeamDef);
    if (!pitcher || (pitcher == null)) { 
        console.error('error')} 
    else {
    const Py=  new Player(pitcher?.pid,pitcher?.Name,pitcher?.Role,pitcher?.LineUp,pitcher?.pstats_id,pitcher?.Pitching,pitcher?.Batting,pitcher?.Fielding,pitcher?.Running);
    console.log("Pitcher ",Py.Name, " on the mound:",out);
    while (out < 3) {
        
        let batter = await CallBatter(inn.lab, TeamBy); 
        if (!batter|| (batter==null)) { 
            console.error('error');
        } 
        else { 
            const Bt=  new Player(batter.pid,batter.Name,batter.Role,batter.LineUp,batter.pstats_id,batter.Pitching,batter.Batting,batter.Fielding,batter.Running);
            inn.lab =Bt.LineUp;
            console.log ("at Bat:",(Bt.Name), 'out:',(out));

            let play = bat(Bt.Batting, Py.Pitching);
            
            if (typeof play === 'number') {
                switch (play) {
                case 0:                       //////////////    K
                    
                    out++; 
                    inn.k++;
                    inn.lab++;
                    await statUpd(Bt.pstats_id, "ab,1;ko,1")
                    // statUpd(Fi.pstats_id, "fo,1;fassist,1")  ; 
                    await statUpd(Py.pstats_id, "vsbat,1;k,1") ;                
                break;
                case 2:                        /////////////   Base on Ball
                    let[anb, asc] = loadBase(b, 1);
                    b=anb; 
                    inn.s=inn.s+asc; 
                    inn.b++;
                    inn.lab++; //console.log("lob",b); 
                    await statUpd(Bt.pstats_id, "ab,1;bb,1") ;
                    await statUpd(Py.pstats_id, "vsbat,1;b,1")             
                break;
                } 
            } 
            else if (Array.isArray(play) && typeof play[0] === 'number' ){
                    // If play = tuple that include a num 
                    const num = play[0];
                    const trajectoryData :trajectory = play[1];
                    switch (num) {
            
                    case 3: 
                    let fielderF = await CallPlayer('P', TeamDef);
                        
                        if (!fielderF || (fielderF == null)) { 
                            console.error('error');
                        } 
                        else { 
                            const FiF=  new Player(fielderF.pid,fielderF.Name,fielderF.Role,fielderF.LineUp,fielderF.pstats_id,fielderF.Pitching,fielderF.Batting,fielderF.Fielding,fielderF.Running);
                            console.log("Fielder ",(FiF.Name),(FiF.Role), " nearby the Play:",(out));
                                                    ////////////    FLY Out
                            await statUpd(Bt.pstats_id, "ab,1;") 
                        out++; inn.fo++;inn.lab++; //console.log("lob",inn.lob);   
                    break;
                }
                    case 4:                         // /////////    HIT
                        let [nb, sc] = loadBase(b, 1);inn.lab++;
                        await statUpd(Bt.pstats_id, "ab,1;h,1") 
                        inn.h++;
                    break;

                    case 1:                         // /////////    IN PLAY
                        let fielder = await CallPlayer('P', TeamDef);
                        
                        if (!fielder || (fielder == null)) { 
                            console.error('error');
                        } 
                        else { 
                            const Fi=  new Player(fielder.pid,fielder.Name,fielder.Role,fielder.LineUp,fielder.pstats_id,fielder.Pitching,fielder.Batting,fielder.Fielding,fielder.Running);
                            console.log("Fielder ",(Fi.Name),(Fi.Role), " nearby the Play:",(out));
                            
                            let g = inplay(Bt.Running,Fi.Fielding,trajectoryData)
                            switch (g) {
                            case 5:                 //////////////  HIT
                                let [nb, sc] = loadBase(b, 1); //new bases loads, runs socred
                                b=nb; inn.s=inn.s+sc; inn.h++ ;inn.lab++;//console.log("lob",b);
                                await statUpd(Bt.pstats_id, "ab,1;h,1") ;
                                await statUpd(Py.pstats_id, "ab,1;vsbat,1;ph,1") 
                            break;
                            //console.log("baserunnerrrr ",b);       
                            case 6:                 //////////////  PUTTED-GROUND-TAG OUT
                                out++; inn.po++;inn.lab++; //console.log("lob",b);  
                                await statUpd(Bt.pstats_id, "ab,1") ;
                                await statUpd(Fi.pstats_id, "fo,1;fassist,1")  ; 
                                await statUpd(Py.pstats_id, "vsbat,1;") ; 
                            break;
                            case 7:                 //////////////  FLY OUT
                                out++; inn.fo++;inn.lab++; //console.log("lob",b); 
                                await statUpd(Bt.pstats_id, "ab,1"); 
                                await statUpd(Fi.pstats_id, "fo,1;") ;
                                await statUpd(Py.pstats_id, "vsbat,1;") ; 
                            break;

                            case 8:                 ////////////    Error
                                let [nb1, sc1] = loadBase(b, 1);
                                b=nb1; inn.s=inn.s+sc1;inn.lab++;
                                inn.s++; inn.e++; //console.log("lob",b); 
                                await statUpd(Bt.pstats_id, "ab,1;safe,1"); 
                                await statUpd(Fi.pstats_id, "fe,1") ;
                                await statUpd(Py.pstats_id, "vsbat,1;pe,1") ; 
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
    
