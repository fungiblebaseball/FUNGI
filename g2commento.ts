import { inning, score } from "./utils/types.ts";
import { actInning } from "./actions/actinning.ts"
import { Team } from "./utils/class.ts";

// Teams Attributes for TEST
const TeamA = new Team("Team A", 30, 40, 50, 50);
const TeamB = new Team("Team B", 30, 40, 50, 50);

// Game init.
function game(TeamA: Team, TeamB: Team):[string, inning, inning] | string {
    let punteggioA = 0;
    let punteggioB = 0;
    let innA: inning ={ s:0,h:0,e:0,k:0,b:0,fo:0,po:0,lob:0 };
    let innB: inning ={ s:0,h:0,e:0,k:0,b:0,fo:0,po:0,lob:0 };
    let scoreA = { s:0,h:0,e:0,k:0,b:0,fo:0,po:0,lob:0 };
    let scoreB = { s:0,h:0,e:0,k:0,b:0,fo:0,po:0,lob:0 };

// 9 Inning Game
    for (let i = 1; i < 10; i++) { 
        let innA  = actInning(TeamA, TeamB);
        console.log("------------------");
       // console.log("Inning", i, "A:",innA.s);
        let innB  = actInning(TeamB, TeamA);
        //   console.log("------------------");
       // console.log("Inning", i, "B:",innB.s);

// Inning Score Update    
        console.log("------------------");
        scoreA= {s:scoreA.s+innA.s, h: scoreA.h+innA.h, e: scoreA.e+innA.e, k: scoreA.k+innA.k, b: scoreA.b+innA.b, po:scoreA.po+innA.po ,fo:scoreA.fo+innA.fo,lob:scoreA.lob+innA.lob}; 
        scoreB= {s:scoreB.s+innB.s, h: scoreB.h+innB.h, e: scoreB.e+innB.e, k: scoreB.k+innB.k, b: scoreB.b+innB.b, po:scoreB.po+innB.po ,fo:scoreB.fo+innB.fo,lob:scoreB.lob+innB.lob}; 
        console.log("Score A=", scoreA.s," H", innA.h," E",innA.e," K",innA.k," BB",innA.b," PO",innA.po," FO",innA.fo," LOB",innA.lob);
        console.log("Score B=", scoreB.s," H", innB.h," E",innB.e," K",innB.k," BB",innB.b," PO",innB.po," FO",innB.fo," LOB",innB.lob);
    }
    if (scoreA.s > scoreB.s) {
        return [TeamA.Name,scoreA,scoreB];
    } else if (scoreB.s > scoreA.s) {
        return [TeamB.Name, scoreA,scoreB];
    } else {
        return "Parità";
    }
}

const result = game(TeamA, TeamB);


if (typeof result !== 'string') { // Verify if result is a tuple
    const [winner, scoreA, scoreB] = result;
    
    console.log("----FINAL SCORE----");
    console.log("Score A=", scoreA.s, " H", scoreA.h, " E", scoreA.e, " K", scoreA.k, " BB", scoreA.b," PO",scoreA.po," FO",scoreA.fo," LOB",scoreA.lob);
    console.log("Score B=", scoreB.s, " H", scoreB.h, " E", scoreB.e, " K", scoreB.k, " BB", scoreB.b," PO",scoreB.po," FO",scoreB.fo," LOB",scoreB.lob);
    console.log("------------------");
    console.log("Wins:", winner);
    console.log("------------------");
}else {console.log("WARNING:", result);}

