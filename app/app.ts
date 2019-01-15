function startGame() {

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(80, playerName);
    postScore(-5, playerName)

}

function logPlayer(name: string = 'MultiMath player'): void {
    console.log(`New game starting for ${name}`);
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {

    let logger: (value: string) => void;

    if (score < 0 ) {
        logger = logError;
    } else {
        logger = logMessage;
    }

    let scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`);
}

function getInputValue(elmentId: string): string | undefined {
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elmentId);

    if (inputElement.value === '') {
        return undefined;
    } else {
        return inputElement.value;
    }
}

document.getElementById('startGame')!.addEventListener('click', startGame);

let logMessage = (message: string) => console.log(message);

function logError(error: string): void {
    console.error(error);
}

