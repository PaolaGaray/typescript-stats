
import { MatchData } from '../MatchData';
import { Analyser } from '../Summary';
import { MatchResult } from '../MatchResult';


export class WinsAnalysis implements Analyser { 
    constructor(public team: string) {}

    run(matches: MatchData[]): string {

        let wings = 0;

        for(let match of matches) {
            if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
                wings++;
            } else if ( match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
                wings++;
            }
        }

        return `Team ${this.team} won ${wings} games`;
   }
}