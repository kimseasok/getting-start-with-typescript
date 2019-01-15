var Player = (function () {
    function Player() {
    }
    Player.prototype.formatName = function () {
        return this.name.toLocaleUpperCase();
    };
    return Player;
}());
function startGame() {
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(80, playerName);
    postScore(-5, playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = 'MultiMath player'; }
    console.log("New game starting for " + name);
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = 'MultiMath Player'; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = score + " - " + playerName;
    logger("Score: " + score);
}
function getInputValue(elmentId) {
    var inputElement = document.getElementById(elmentId);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
document.getElementById('startGame').addEventListener('click', startGame);
var logMessage = function (message) { return console.log(message); };
function logError(error) {
    console.error(error);
}
var firstPlayer = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer.formatName());
//# sourceMappingURL=app.js.map