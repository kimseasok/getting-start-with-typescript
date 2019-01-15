function startGame() {
    var playerName;
    logPlayer(playerName);
    var messageElement = document.getElementById('messages');
    messageElement.innerText = 'Welcome to MultiMath! Starting new Game...';
    console.log('Hello World');
}
function logPlayer(name) {
    console.log("New game starting for " + name);
}
document.getElementById('startGame').addEventListener('click', startGame);
