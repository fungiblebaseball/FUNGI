import { inning, score } from "./common/types.ts";
import { actInning } from "./actions/actinning.ts"
import { Team, Squad } from "./common/class.ts";
import{ GiveTeam} from "./DB_utils/TeamGen.ts"
import { getTeamName } from "./DB_utils/DB_functions/readData/tnameForId.ts";
// Teams Attributes for TEST
//const SquadA =  await GiveTeam(115); 
//const S1 = await GiveTeam(115);
//const SquadB = await GiveTeam(116);
//const S2= await GiveTeam(116);
//const TeamA = new Team(S1.SquadName, S1.Pitcher, S1.ROutfielder, S1.ShortStop, S1.LOutfielder);
//const TeamB = new Team(S2.SquadName, S2.Pitcher, S2.ROutfielder, S2.ShortStop, S2.LOutfielder);

// Game init.
export async function game(TeamA: number, TeamB: number):Promise<string | [string,string,string, inning, inning]> {
    let punteggioA = 0;
    let punteggioB = 0;
    let innA  ={ s:0,h:0,e:0,k:0,b:0,fo:0,po:0,lob:0,lab:0 };
    let innB ={ s:0,h:0,e:0,k:0,b:0,fo:0,po:0,lob:0,lab:0 };
    let scoreA = { s:0,h:0,e:0,k:0,b:0,fo:0,po:0,lob:0,lab:0  };
    let scoreB = { s:0,h:0,e:0,k:0,b:0,fo:0,po:0,lob:0,lab:0  };
// ROSTER BUILDING
const teamnameA = await getTeamName(TeamA);
const teamnameB = await getTeamName(TeamB);
// 9 Inning Game
let ab1 : number = 1 ; 
let ab2 : number = 1 ;
    for (let i = 0; i < 2; i++) { 
        
        let innA = await actInning(TeamA,ab1, TeamB);
        ab1=innA.lab;// let innA = (A[0])
        console.log("------------------");
        // console.log("Inning", i, "A:",innA.s);
        let innB  = await actInning(TeamB,ab2, TeamA);
        ab2=innB.lab;// console.log("------------------");
        // console.log("Inning", i, "B:",innB.s);
        console.log("------------------");
    // Inning Score Update    
        scoreA= {s:scoreA.s+innA.s, h: scoreA.h+innA.s, e: scoreA.e+innA.e, k: scoreA.k+innA.k, b: scoreA.b+innA.b, po:scoreA.po+innA.po ,fo:scoreA.fo+innA.fo,lob:scoreA.lob+innA.lob,lab: innA.lab}; 
        scoreB= {s:scoreB.s+innB.s, h: scoreB.h+innB.h, e: scoreB.e+innB.e, k: scoreB.k+innB.k, b: scoreB.b+innB.b, po:scoreB.po+innB.po ,fo:scoreB.fo+innB.fo,lob:scoreB.lob+innB.lob,lab: innB.lab}; 
        console.log("Score ", scoreA.s," ",teamnameA,"= R", innA.s," H", innA.h," E",innA.e," K",innA.k," BB",innA.b," PO",innA.po," FO",innA.fo," LOB",innA.lob," LAB",innA.lab);
        console.log("Score ", scoreB.s," ",teamnameB,"= R", innB.s," H", innB.h," E",innB.e," K",innB.k," BB",innB.b," PO",innB.po," FO",innB.fo," LOB",innB.lob," LAB",innB.lab);
    }
    if (scoreA.s > scoreB.s) {
        return [teamnameA,teamnameB,teamnameA, scoreA,scoreB];
    } else if (scoreB.s > scoreA.s) {
        return [teamnameA,teamnameB,teamnameB, scoreA,scoreB];
    } else {
        return "Parità";
    }
}

const result = await game(127, 128);


if (typeof result !== 'string') { // Verify if result is a tuple
    const [TeamA,TeamB,winner, scoreA, scoreB] = result  as [string,string,string, inning, inning]; // Explicit type assertion
    ;
    
    console.log("----FINAL SCORE----");
    console.log("Score ",TeamA,"= R", scoreA.s, " H", scoreA.h, " E", scoreA.e, " K", scoreA.k, " BB", scoreA.b," PO",scoreA.po," FO",scoreA.fo," LOB",scoreA.lob);
    console.log("Score ",TeamB,"= R", scoreB.s, " H", scoreB.h, " E", scoreB.e, " K", scoreB.k, " BB", scoreB.b," PO",scoreB.po," FO",scoreB.fo," LOB",scoreB.lob);
    console.log("------------------");
    console.log("Wins:", winner);
    console.log("------------------");
}

else {console.log("WARNING:", result);}

