export class Squad {
    push: any;
    constructor(
        public SquadName: string,
        public Pitcher: Player, //Pitching skills
        public Catcher: Player, //Pitching skills
        public FstBaseman: Player,  //Glove, fielding skills
        public SndBaseman: Player, //Glove, fielding skills
        public TrdBaseman: Player, //Glove, fielding skills
        public ShortStop: Player, //Glove, fielding skills
        public LOutfielder: Player, //Glove, fielding skills
        public COutfielder: Player, //Glove, fielding skills
        public ROutfielder: Player, //Glove, fielding skills
    ) {}
}

export class Player {
    constructor(
        public Name: string,
        public Pitching: number, //Pitching skills
        public Batting: number,  //Battind skills
        public Fielding: number, //Glove, fielding skills
        public Running: number   //Run on base, speeed skills
    ) {}
}

export class Team {
    constructor(
        public Name: string,
        public Pitcher: number, //Pitching skills
        public Batter: number,  //Battind skills
        public Fielder: number, //Glove, fielding skills
        public Runner: number   //Run on base, speeed skills
    ) {}
}

export class Colored {   ////Example usage: Colored.Clog("TEXT", "red");
    static colors = {
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        reset: "\x1b[0m"
    };

    static colorize(text: string, color: keyof typeof Colored.colors): string {
        const colorCode = Colored.colors[color];
        return `${colorCode}${text}${Colored.colors.reset}`;
    }

    static Clog(text: string, color: keyof typeof Colored.colors): void {
        console.log(Colored.colorize(text, color));
    }
}