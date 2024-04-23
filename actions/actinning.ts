import { Squadra } from "../utils/class";
import { inning, base,trajectory } from "../utils/types";
import { bat } from "./bat.ts";
import { inplay } from "./inplay.ts";
import { loadBase , lob} from "./base.ts";

export function actInning(squadraAttacco: Squadra, squadraDifesa: Squadra):inning  {
    let out = 0;
    let b: base ={1:false,2:false,3:false};
    let inn: inning ={ s:0,h:0,e:0,k:0,b:0,po:0,fo:0,lob:0 };
    while (out < 3) {
        console.log("In attacco:",squadraAttacco.nome, "out:",out);
        let play = bat(squadraAttacco.battitore, squadraDifesa.lanciatore);
        if (typeof play === 'number') {
        switch (play) {
            case 0:                       //////////////    K
                out++; 
                inn.k++;//console.log("lob",inn.lob);                
                break;

            case 2:                        /////////////   BaseBall
                    let[anb, asc] = loadBase(b, 1);
                    b=anb; inn.s=inn.s+asc; inn.b++; //console.log("lob",b);               
                break;
            } 
        } 
        else if (Array.isArray(play) && typeof play[0] === 'number' ){
                // Se play è una tupla che contenente un numero 
                const num = play[0];
                const trajectoryData :trajectory = play[1];
                //console.log(trajectoryData);
            switch (num) {
            
            case 3:                         ////////////    FLY Out
                    out++; inn.fo++; //console.log("lob",inn.lob);   
                break;

            case 4:                         // /////////    HIT
                    let [nb, sc] = loadBase(b, 1);
                break;

            case 1:                         // /////////    IN PLAY
                let g = inplay(squadraAttacco.attacco,squadraDifesa.difesa,trajectoryData) 
                
                switch (g) {
                    case 5:                 //////////////  HIT
                        let [nb, sc] = loadBase(b, 1); //new bases loads, runs socred
                        b=nb; inn.s=inn.s+sc; inn.h++ ;//console.log("lob",b);
                        break;
                        //console.log("baserunnerrrr ",b);       
                    case 6:                 //////////////  PUTTED-GROUND-TAG OUT
                        out++; inn.po++; //console.log("lob",b);    
                        break;

                    case 7:                 //////////////  FLY OUT
                        out++; inn.fo++; //console.log("lob",b);   
                        break;

                    case 8:                 ////////////    Error
                        let [nb1, sc1] = loadBase(b, 1);
                        b=nb1; inn.s=inn.s+sc1;
                        inn.s++; inn.e++; //console.log("lob",b); 
                        break; 
                }                       
                break;
            
            default:
                console.log ("error"); 
                break;      // Gestione caso non previsto          
        }
    } 
    console.log("runs",inn.s,"out",out,"lob ",lob(b));
    inn.lob = lob(b) }
    return inn;
   
}