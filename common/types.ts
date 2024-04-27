export type inning = {
    s: number;      // Strike
    h: number;      // Hit
    e: number;      // Error
    k: number;      // Strike Out
    b: number;      // Base on Balls
    po: number;     // Putted Out by the Defence
    fo: number;     // Fly Out
    lob: number;    // Left on Base
};

export type score = {
    s: number;
    h: number;
    e: number;
    k: number;
    b: number;
    fo: number;
    po: number;
};
  
export type base = {
    1: boolean;     // 1st. Base
    2: boolean;     // 2st. Base
    3: boolean;     // 3st. Base
};

export type trajectory = {
    B: boolean;
    T: string;
    L: number;
};