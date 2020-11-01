import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');

reader.read();

//enum -enumeration
enum MatchResutl {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
};

let manUnitedWings = 0;

for(let match of reader.data) {
    if(match[1] === 'Man United' && match[5] === MatchResutl.HomeWin) {
        manUnitedWings++;
    } else if ( match[2] === 'Man United' && match[5] === MatchResutl.AwayWin) {
        manUnitedWings++;
    }
}

//console.log(`Man United won ${manUnitedWings} games`)