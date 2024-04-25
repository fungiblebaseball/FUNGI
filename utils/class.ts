export class Team {
    constructor(
        public Name: string,
        public Pitcher: number,
        public Batter: number,
        public Fielder: number,
        public Runner: number
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