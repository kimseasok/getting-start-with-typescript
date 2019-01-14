function startGame() {
    var messageElement = document.getElementById('messages');
    messageElement.innerText = 'Welcome to MultiMath! Starting new Game...';
    console.log('Hello World');
}

document.getElementById('startGame').addEventListener('click', startGame);