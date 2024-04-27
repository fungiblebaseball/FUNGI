import { base } from "../common/types"
// Base Advancement 
export function loadBase(Bases: base, n: number): [base, number] {
    let runs = 0;

    for (let i = 0; i < n; i++) {
        if (Bases[3]) {
            runs++;
            Bases[3] = false;
        } 
        if (Bases[2]) {
            Bases[3] = true;
            Bases[2] = false;
        } 
        if (Bases[1]) {
            Bases[2] = true; 
        } else if (!Bases[1]) {
            Bases[1] = true;
        }
        if (n > 1) {
            Bases[1] = false;
        } 
    }

    return [Bases, runs];
}

// Left on Base when the inning ends
export function lob(Bases: base): number {
    let lob = 0;
    if(Bases[1]){lob++
    }
    if(Bases[2]){lob++
    }if(Bases[3]){lob++
    }
    return lob;
}