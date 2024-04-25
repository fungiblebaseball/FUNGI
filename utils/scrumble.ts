// Sort funtion collection

export function perform(attrib: number,range:number): boolean {
    const event = Math.floor(Math.random() * range) ; // Sort number > 0 < range.
        if (attrib>=event)  {                          
            return true   ;
        }   else {               
            return false  ;
            }  
}

//const alpha = 4; //Modify to experiment
//const beta = 1.5;  // With this parameter distrib on 63
//const min = 30;
//const max = 90;
//USAGE: Confront ATTRIB. alpha=DISTtoMIN beta=DISTtoMAX 

export function betaConfront(attrib: number,alpha: number, beta: number, min: number, max: number): boolean {
    const u = Math.random();
    const value = Math.pow(u, 1 / alpha) / (Math.pow(u, 1 / alpha) + Math.pow(1 - u, 1 / beta));
    const result =  Math.floor((Math.min(Math.max((min + value * (max - min +1)), min), max))*10);
    if (attrib>=result)  {                          
        return true   ;
    }   else {               
        return false  ;
        } 

}

export function betaRandom(alpha: number, beta: number, min: number, max: number): number {
    const u = Math.random();
    const value = Math.pow(u, 1 / alpha) / (Math.pow(u, 1 / alpha) + Math.pow(1 - u, 1 / beta));
    const result =  (Math.min(Math.max((min + value * (max - min +1)), min), max));
        return Math.floor(result)  ;
        } 


export function vari(n:number):number {
    const perc = Math.random() * 0.2 - 0.1; // Random num -10% and +10%
    const v = n * perc;                     // Calculate Variation on Random num %
    return Math.floor(n + v) ;              // Give num n modified by variation 
}