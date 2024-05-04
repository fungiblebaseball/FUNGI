export class Player {
    constructor(
        public pid: number,
        public Name: string,
        public Role: string,
        public LineUp: number, 
        public pstats_id: number,
        public Pitching: number, //Pitching skills
        public Batting: number,  //Battind skills
        public Fielding: number, //Glove, fielding skills
        public Running: number   //Run on base, speeed skills
    ) {}
}

export class Squadz {
    constructor(
        public SquadName: string,
        public players: Player[]
    ) {}

    findPlayerByLineupz(lineupNumber: number): Player | undefined {
        return this.players.find(player => player.LineUp === lineupNumber);
    }

    findPlayerByRolez(role: string): Player | undefined {
        return this.players.find(player => player.Role === role);
    }
}

export class Squad {
    //push: any;
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
    ) {
        
    }
    findPlayerByLineup(lineupNumber: number): Player  {
        // Creiamo un array con tutti i giocatori della squadra
        const players: Player[] = [
            this.Pitcher,
            this.Catcher,
            this.FstBaseman,
            this.SndBaseman,
            this.TrdBaseman,
            this.ShortStop,
            this.LOutfielder,
            this.COutfielder,
            this.ROutfielder
        ];
        
        // Cerchiamo il giocatore con il numero di lineup specificato
        return players.find(player => player.LineUp === lineupNumber)||new Player(0,"Default", "Default",0,0, 0, 0, 0, 0);
    }

    findPlayerByRole(role: string): Player {
        const players: Player[] = [
            this.Pitcher,
            this.Catcher,
            this.FstBaseman,
            this.SndBaseman,
            this.TrdBaseman,
            this.ShortStop,
            this.LOutfielder,
            this.COutfielder,
            this.ROutfielder
        ];
        const player = players.find(player => player.Role === role);

        // Se non viene trovato nessun giocatore, restituisci un giocatore di default
        return player || new Player(0,"Default", "Default",0, 0,0, 0, 0, 0);
    }
}



export class Team {
    constructor(
        public Name: string,
        public Pitcher: Player, //Pitching skills
        public Batter: Player,  //Battind skills
        public Fielder: Player, //Glove, fielding skills
        public Runner: Player   //Run on base, speeed skills
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