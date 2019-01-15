function startGame() {
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(80);
}
function logPlayer(name) {
    if (name === void 0) { name = 'MultiMath player'; }
    console.log("New game starting for " + name);
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = 'MultiMath Player'; }
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = score + " - " + playerName;
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
