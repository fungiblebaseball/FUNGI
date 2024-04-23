export type inning = {
    s: number;
    h: number;
    e: number;
    k: number;
    b: number;
    po: number;
    fo: number;
    lob: number;
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
    1: boolean;
    2: boolean;
    3: boolean;
};

export type trajectory = {
    B: boolean;
    T: string;
    L: number;
};