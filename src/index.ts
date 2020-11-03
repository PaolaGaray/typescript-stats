import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

//Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();


let manUnitedWings = 0;

for(let match of matchReader.matches) {
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWings++;
    } else if ( match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWings++;
    }
}

console.log(`Man United won ${manUnitedWings} games`)