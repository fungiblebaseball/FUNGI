function betaRandom(alpha: number, beta: number, min: number, max: number): number {
    const u = Math.random();
    const value = Math.pow(u, 1 / alpha) / (Math.pow(u, 1 / alpha) + Math.pow(1 - u, 1 / beta));
    const result =  (Math.min(Math.max((min + value * (max - min +1)), min), max));
    return result
}

function countNumbers(alpha: number, beta: number, min: number, max: number, iterations: number): number[] {
    const counts = Array.from({ length: max - min + 1 }, () => 0);
    for (let i = 0; i < iterations; i++) {
        const randomNumber = betaRandom(alpha, beta, min, max);
        counts[Math.floor(randomNumber) - min]++;
    }
    return counts;
}

const alpha = 1.4; // Modifica questi valori per sperimentare
const beta = 0.5;  // Modifica questi valori per sperimentare
const min = 30;
const max = 80;
const iterations = 10;

const numbersCount = countNumbers(alpha, beta, min, max, iterations);
console.log("Numero di occorrenze per ogni numero:");
for (let i = 0; i < numbersCount.length; i++) {
    console.log(`${i + min}: ${numbersCount[i]}`);
}