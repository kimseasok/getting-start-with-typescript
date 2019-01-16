"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var Scoreboard = (function () {
    function Scoreboard() {
        this.results = [];
    }
    Scoreboard.prototype.addResult = function (newResult) {
        this.results.push(newResult);
        var allCapsName = _.upperCase(newResult.playerName);
        console.log(allCapsName + ": " + newResult.score);
    };
    Scoreboard.prototype.updateScoreboard = function () {
        var output = '<h2>Scoreboard</h2>';
        for (var index = 0; index < this.results.length; index++) {
            var result = this.results[index];
            output += '<h4>';
            output += result.playerName + ': ' + result.score + '/' + result.problemCount;
            output += '</h4>';
        }
        var scoreElement = document.getElementById('scores');
        scoreElement.innerHTML = output;
    };
    return Scoreboard;
}());
exports.Scoreboard = Scoreboard;
//# sourceMappingURL=scoreboard.js.map