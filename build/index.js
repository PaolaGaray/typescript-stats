"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
//enum -enumeration
var MatchResutl;
(function (MatchResutl) {
    MatchResutl["HomeWin"] = "H";
    MatchResutl["AwayWin"] = "A";
    MatchResutl["Draw"] = "D";
})(MatchResutl || (MatchResutl = {}));
;
var manUnitedWings = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResutl.HomeWin) {
        manUnitedWings++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResutl.AwayWin) {
        manUnitedWings++;
    }
}
//console.log(`Man United won ${manUnitedWings} games`)
