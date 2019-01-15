function startGame() {

    let playerName: string = 'Audrey';

    logPlayer(playerName);

    let messageElement: HTMLElement | null = document.getElementById('messages');

    messageElement!.innerText = 'Welcome to MultiMath! Starting new Game...';
    console.log('Hello World');
}

function logPlayer(name: string) {
    console.log(`New game starting for ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);