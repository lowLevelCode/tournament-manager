import { IEntity } from "./entity";

export interface ITeam extends IEntity {
    tendencia: '<' | '>' | '=' | '';
    nombre: string;
    PJ: number;
    G: number;
    E: number;
    P: number;
    GF: number;
    GC: number;
    DG: number;
    Pts: number;
}

export class Team {
    static createImageUrl(teamName: string) {
        return `assets/${teamName}.png`;
    }
}


export enum StandingColumn {
    Team = 'team',
    MatchesPlayed = 'PJ',
    Wins = 'G',
    Draws = 'E',
    Losses = 'P',
    Goals = 'GF',
    GoalsConsided = 'GC',
    GoalDif = 'DG',
    Points = 'Pts',
    Last = 'last',
}