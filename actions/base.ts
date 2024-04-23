import { base } from "../utils/types"

export function loadBase(basi: base, n: number): [base, number] {
    let runs = 0;

    for (let i = 0; i < n; i++) {
        if (basi[3]) {
            runs++;
            basi[3] = false;
        } 
        if (basi[2]) {
            basi[3] = true;
            basi[2] = false;
        } 
        if (basi[1]) {
            basi[2] = true; 
        } else if (!basi[1]) {
            basi[1] = true;
        }
        if (n > 1) {
            basi[1] = false;
        } 
    }

    return [basi, runs];
}


export function lob(basi: base): number {
    let lob = 0;
    if(basi[1]){lob++
    }
    if(basi[2]){lob++
    }if(basi[3]){lob++
    }
    return lob;
}